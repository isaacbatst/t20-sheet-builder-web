import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import SheetBuilder, { BuildingSheet, Dwarf, Human, OriginFactory, OutOfGameContext, RaceInterface, RaceName, RoleFactory, SheetBuilderError, SheetSerializer, VersatileChoiceFactory } from "t20-sheet-builder";
import { AppStartListening } from "../..";
import { takeLatest } from "../../sagas";
import { updatePreview } from "./sheetBuilderSliceSheetPreview";
import { SheetBuilderStateRace } from "./types";
import { resetFormAlert, setFormError, setFormSuccess } from "./sheetBuilderSliceForm";
import { decrementAttribute, incrementAttribute } from "./sheetBuilderSliceInitialAttributes";
import { resetRace } from "./sheetBuilderSliceRaceDefinition";
import { resetRole } from "./sheetBuilderSliceRoleDefinition";

export const sheetBuilderMiddleware = createListenerMiddleware()

const startListening = sheetBuilderMiddleware.startListening as AppStartListening

const isSheetBuilderAction = (type: string) => type.startsWith('sheetBuilder/')

startListening({
  predicate(action) {
    if(typeof action.type !== 'string'){
      return false
    }
    const shouldTrigger = isSheetBuilderAction(action.type) 
      && !isAnyOf(updatePreview, setFormError, resetFormAlert, setFormSuccess)(action)
    return shouldTrigger
  },
  effect: async (action, api) => {
    try {
      api.dispatch(resetFormAlert())
      await takeLatest(api)

      const {initialAttributes, race: {race: serializedRace}, role: {role: serializedRole}, origin: {origin: serializedOrigin}} = api.getState().sheetBuilder

      const sheet = new BuildingSheet()
      const sheetBuilder = new SheetBuilder(sheet)
      const serializer = new SheetSerializer(new OutOfGameContext())

      sheetBuilder
        .setInitialAttributes(initialAttributes)

      if(serializedRace) {
        const race = makeRace(serializedRace)
        sheetBuilder.chooseRace(race)
      }

      if(serializedRole) {
        const role = RoleFactory.makeFromSerialized(serializedRole)
        sheetBuilder.chooseRole(role)
      }
      
      if (serializedOrigin) {
        const origin = OriginFactory.makeFromSerialized(serializedOrigin)
        sheetBuilder.chooseOrigin(origin)
      }
      
      api.dispatch(updatePreview(serializer.serialize(sheet)))

      const shouldDispatchSuccess = !isAnyOf(
        incrementAttribute, decrementAttribute, resetRace, resetRole
      )(action)
 
      if(shouldDispatchSuccess) {
        api.dispatch(setFormSuccess('Ficha atualizada: ' + action.type))
      }
    } catch (err) {
      if(err instanceof SheetBuilderError) {
        api.dispatch(setFormError(err.message))
      }
    }
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