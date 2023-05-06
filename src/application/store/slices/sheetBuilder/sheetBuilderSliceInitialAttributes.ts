import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Attribute, Attributes } from 't20-sheet-builder'
import { RootState } from '../..'

export type SheetBuilderInitialAttributesState = Attributes

const initialState: SheetBuilderInitialAttributesState = {
  strength: 0,
  dexterity: 0,
  charisma: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
}

export const sheetBuilderSliceInitialAttributes = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    incrementAttribute: (state, action: PayloadAction<Attribute>) => {
      state[action.payload] += 1
    },
    decrementAttribute: (state, action: PayloadAction<Attribute>) => {
      state[action.payload] -= 1
    },
  }
})

export const { incrementAttribute, decrementAttribute, } = sheetBuilderSliceInitialAttributes.actions

export const selectAttributes = (state: RootState) => state.sheetBuilder.initialAttributes
export const selectAttribute = (attribute: Attribute) => (state: RootState) => state.sheetBuilder.initialAttributes[attribute]

export default sheetBuilderSliceInitialAttributes