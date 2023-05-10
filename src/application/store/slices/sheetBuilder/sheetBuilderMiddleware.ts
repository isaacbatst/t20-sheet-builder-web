import { createListenerMiddleware } from "@reduxjs/toolkit";
import SheetBuilder, { ArcanistBuilder, ArcanistLineage, ArcanistLineageDraconic, ArcanistLineageFaerie, ArcanistLineageRed, ArcanistLineageType, ArcanistPath, ArcanistPathMage, ArcanistPathName, ArcanistPathSorcerer, ArcanistPathWizard, ArcanistPathWizardFocusFactory, BuildingSheet, Dwarf, GeneralPowerFactory, Human, OutOfGameContext, RaceInterface, RaceName, RoleInterface, RoleName, SheetSerializer, SpellFactory, Warrior } from "t20-sheet-builder";
import { AppStartListening } from "../..";
import { takeLatest } from "../../sagas";
import { updatePreview } from "./sheetBuilderSliceSheetPreview";
import { SheetBuilderStateRace, SheetBuilderStateRole } from "./types";

export const sheetBuilderMiddleware = createListenerMiddleware()

const startListening = sheetBuilderMiddleware.startListening as AppStartListening

const isSheetBuilderAction = (type: string) => type.startsWith('sheetBuilder/')
const isNotUpdatePreviewAction = (type: string) => type !== 'sheetBuilder/updatePreview'

startListening({
  predicate(action) {
    if(typeof action.type !== 'string'){
      return false
    }
    const shouldTrigger = isSheetBuilderAction(action.type) && isNotUpdatePreviewAction(action.type)
    console.log(shouldTrigger)
    return shouldTrigger
  },
  effect: async (action, api) => {
    await takeLatest(api)

    const {initialAttributes, race: {race: serializedRace}, role: {role: serializedRole}} = api.getState().sheetBuilder

    const sheet = new BuildingSheet()
    const sheetBuilder = new SheetBuilder(sheet)
    const serializer = new SheetSerializer(new OutOfGameContext())

    const raceStep = sheetBuilder
      .setInitialAttributes(initialAttributes)

    if(!serializedRace) {
      api.dispatch(updatePreview(serializer.serialize(sheet)))
      return
    }

    const race = makeRace(serializedRace)
    const roleStep = raceStep.chooseRace(race)

    if(!serializedRole) {
      api.dispatch(updatePreview(serializer.serialize(sheet)))
      return
    }

    const role = makeRole(serializedRole)
    roleStep.chooseRole(role)
    api.dispatch(updatePreview(serializer.serialize(sheet)))
  }
})

function makeRace(serializedRace: SheetBuilderStateRace): RaceInterface {
  if(serializedRace.name === RaceName.human){
    return new Human(serializedRace.selectedAttributes)
  }

  if(serializedRace.name === RaceName.dwarf){
    return new Dwarf()
  }

  throw new Error(`UNKNOWN_RACE`)
}

function makeRole(serializedRole: SheetBuilderStateRole): RoleInterface {
  if(serializedRole.name === RoleName.warrior){
    return new Warrior(serializedRole.chosenSkills)
  }

  if(serializedRole.name === RoleName.arcanist){
    let path: ArcanistPath | undefined;

    if(serializedRole.path === ArcanistPathName.mage){ 
      const spell = SpellFactory.make(serializedRole.extraSpell)
      path = new ArcanistPathMage(spell)
    }

    if(serializedRole.path === ArcanistPathName.wizard){
      const focus = ArcanistPathWizardFocusFactory.make(serializedRole.focus)
      path = new ArcanistPathWizard(focus)
    }

    if(serializedRole.path === ArcanistPathName.sorcerer){
      let lineage: ArcanistLineage | undefined;

      if(serializedRole.lineage === ArcanistLineageType.draconic){
        lineage = new ArcanistLineageDraconic(serializedRole.damageType)
      }

      if(serializedRole.lineage === ArcanistLineageType.faerie){
        const spell = SpellFactory.make(serializedRole.extraSpell)
        lineage = new ArcanistLineageFaerie(spell)
      }

      if(serializedRole.lineage === ArcanistLineageType.red){
        const power = GeneralPowerFactory.make({name: serializedRole.extraPower})
        lineage = new ArcanistLineageRed(power, serializedRole.customTormentaAttribute)
      }

      if(!lineage){
        throw new Error('UNKNOWN_LINEAGE')
      }

      path = new ArcanistPathSorcerer(lineage)
    }

    if(!path){
      throw new Error('UNKNOWN_PATH')
    }

    return ArcanistBuilder
      .chooseSkills(serializedRole.chosenSkills)
      .choosePath(path)
      .chooseSpells(serializedRole.spells.map(spell => SpellFactory.make(spell)))
  }

  throw new Error(`UNKNOWN_ROLE`)
}