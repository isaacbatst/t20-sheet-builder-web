import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SheetBuilderStateRole, SubmitRolePayload } from './types'

export interface SheetBuilderState {
  role?: SheetBuilderStateRole
}

const initialState: SheetBuilderState = {
  role: undefined
}

export const sheetBuilderSliceRaceDefinition = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    resetRole: (state) => {
      state.role = undefined
    },
    submitRole: (state, action: PayloadAction<SubmitRolePayload>) => {
      state.role = {
        name: action.payload.name,
        chosenSkills: action.payload.chosenSkills
      }
    },
  }
})

export const { submitRole, resetRole } = sheetBuilderSliceRaceDefinition.actions

export default sheetBuilderSliceRaceDefinition