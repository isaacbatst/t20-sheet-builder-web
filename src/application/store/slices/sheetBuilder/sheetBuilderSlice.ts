import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Attribute, Attributes, GeneralPowerName, RaceName, SkillName } from 't20-sheet-builder'
import { RootState } from '../..'
import { EmptyObject } from 't20-sheet-builder/build/common/types/EmptyObject'
import { UnknownObject } from 't20-sheet-builder/build/common/types/UnknownObject'

interface SheetBuilderStateRaceHumanVersatileChoiceSkill {
  type: 'skill',
  name: SkillName
}

interface SheetBuilderStateRaceHumanVersatileChoicePower {
  type: 'power',
  name: GeneralPowerName
}

export type SheetBuilderStateRaceHumanVersatileChoice = SheetBuilderStateRaceHumanVersatileChoiceSkill | SheetBuilderStateRaceHumanVersatileChoicePower

interface SheetBuilderStateRaceHuman {
  name: RaceName.human,
  versatileChoices: SheetBuilderStateRaceHumanVersatileChoice[]
}

interface SheetBuilderStateRaceDwarf {
  name: RaceName.dwarf
}

type SheetBuilderStateRace = {
  attributeModifiers: Partial<Attributes>
} &  (SheetBuilderStateRaceHuman | SheetBuilderStateRaceDwarf)

export interface SheetBuilderState {
  attributes: Attributes,
  race?: SheetBuilderStateRace
}

const initialState: SheetBuilderState = {
  attributes: {
    strength: 0,
    dexterity: 0,
    charisma: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
  },
}

type SubmitRacePayload<T extends UnknownObject = UnknownObject> = {
  attributeModifiers: Partial<Attributes>
} & T

type SubmitRaceHumanPayload = SubmitRacePayload<{
  versatileChoices: SheetBuilderStateRaceHumanVersatileChoice[]
}>

export const sheetBuilderSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    incrementAttribute: (state, action: PayloadAction<Attribute>) => {
      state.attributes[action.payload] += 1
    },
    decrementAttribute: (state, action: PayloadAction<Attribute>) => {
      state.attributes[action.payload] -= 1
    },
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
    }
  }
})

export const { incrementAttribute, decrementAttribute, resetRace, submitRaceHuman, submitRaceDwarf } = sheetBuilderSlice.actions

export const selectAttributes = (state: RootState) => state.sheetBuilder.attributes
export const selectAttribute = (attribute: Attribute) => (state: RootState) => state.sheetBuilder.attributes[attribute]

export default sheetBuilderSlice