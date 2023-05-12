import { createListenerMiddleware } from "@reduxjs/toolkit";
import SheetBuilder, { BuildingSheet, Dwarf, Human, OutOfGameContext, RaceInterface, RaceName, RoleFactory, SheetSerializer, VersatileChoiceFactory } from "t20-sheet-builder";
import { AppStartListening } from "../..";
import { takeLatest } from "../../sagas";
import { updatePreview } from "./sheetBuilderSliceSheetPreview";
import { SheetBuilderStateRace } from "./types";

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

    const role = RoleFactory.makeFromSerialized(serializedRole)
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