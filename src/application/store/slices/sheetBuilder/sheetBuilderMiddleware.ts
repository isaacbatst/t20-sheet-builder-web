import { createListenerMiddleware } from "@reduxjs/toolkit";
import SheetBuilder, { Arcanist, ArcanistBuilder, ArcanistLineageFactory, ArcanistLineageFactoryDraconic, ArcanistLineageFactoryFaerie, ArcanistLineageFactoryRed, ArcanistLineageType, ArcanistPathFactory, ArcanistPathFactoryMage, ArcanistPathFactorySorcerer, ArcanistPathFactoryWizard, ArcanistPathName, BuildingSheet, Dwarf, Human, OutOfGameContext, RaceInterface, RaceName, RoleInterface, RoleName, SerializedArcanist, SerializedArcanistLineage, SerializedArcanistPath, SerializedRole, SheetSerializer, SpellFactory, VersatileChoiceFactory, Warrior } from "t20-sheet-builder";
import { AppStartListening } from "../..";
import { takeLatest } from "../../sagas";
import { updatePreview } from "./sheetBuilderSliceSheetPreview";
import { SheetBuilderStateRace, SheetBuilderStateRole } from "./types";
import { makeArcanistFromSerialized } from "@/application/common/roles/Arcanist";

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
    const choices = serializedRace.versatileChoices.map((choice) => VersatileChoiceFactory.make(choice.type, choice.name))
    return new Human(serializedRace.selectedAttributes, choices)
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
    return makeArcanistFromSerialized(serializedRole)
  }

  throw new Error(`UNKNOWN_ROLE`)
}
