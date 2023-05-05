import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../..'
import { Attribute, Attributes } from 't20-sheet-builder'

export interface SheetBuilderState {
  attributes: Attributes
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

export const sheetBuilderSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    incrementAttribute: (state, action: PayloadAction<Attribute>) => {
      state.attributes[action.payload] += 1
    },
    decrementAttribute: (state, action: PayloadAction<Attribute>) => {
      state.attributes[action.payload] -= 1
    }
  }
})

export const { incrementAttribute, decrementAttribute } = sheetBuilderSlice.actions

export const selectAttributes = (state: RootState) => state.sheetBuilder.attributes
export const selectAttribute = (attribute: Attribute) => (state: RootState) => state.sheetBuilder.attributes[attribute]

export default sheetBuilderSlice