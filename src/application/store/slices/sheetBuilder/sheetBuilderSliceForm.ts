import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../..'

export type SheetBuilderFormState = {
  error: string | undefined
}

const initialState: SheetBuilderFormState = {
  error: undefined,
}

export const sheetBuilderSliceForm = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    setFormError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    resetFormError: (state) => {
      state.error = undefined
    },
  }
})

export const { resetFormError, setFormError } = sheetBuilderSliceForm.actions

export const selectFormError = (state: RootState) => state.sheetBuilder.form.error

export default sheetBuilderSliceForm