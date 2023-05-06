import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RaceName } from 't20-sheet-builder'
import { SheetBuilderStateRace, SubmitRaceHumanPayload, SubmitRacePayload } from './types'

export interface SheetBuilderState {
  race?: SheetBuilderStateRace
}

const initialState: SheetBuilderState = {
  race: undefined
}

export const sheetBuilderSliceRaceDefinition = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    resetRace: (state) => {
      state.race = undefined
    },
    submitRaceHuman: (state, action: PayloadAction<SubmitRaceHumanPayload>) => {
      state.race = {
        attributeModifiers: action.payload.attributeModifiers,
        name: RaceName.human,
        versatileChoices: action.payload.versatileChoices
      }
    },
    submitRaceDwarf: (state, action: PayloadAction<SubmitRacePayload>) => {
      state.race = {
        name: RaceName.dwarf,
        attributeModifiers: action.payload.attributeModifiers
      }
    },
  }
})

export const { resetRace, submitRaceHuman, submitRaceDwarf } = sheetBuilderSliceRaceDefinition.actions

export default sheetBuilderSliceRaceDefinition