import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuildingSheet, OutOfGameContext, SerializedSheetInterface, SheetSerializer } from 't20-sheet-builder';
import { RootState } from '../..';

export interface SheetBuilderSheetPreviewState {
  preview: SerializedSheetInterface
}

const sheet = new BuildingSheet()
const serializer = new SheetSerializer(new OutOfGameContext());

const initialState: SheetBuilderSheetPreviewState = {
  preview: serializer.serialize(sheet)
}

export const sheetBuilderSliceSheetPreview = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    updatePreview(state, action: PayloadAction<SerializedSheetInterface>) {
      state.preview = action.payload
    }
  }
})

export const { updatePreview } = sheetBuilderSliceSheetPreview.actions

export const selectPreviewAttributes = (state: RootState) => state.sheetBuilder.sheet.preview.attributes
export const selectPreviewBuildSteps = (state: RootState) => state.sheetBuilder.sheet.preview.buildSteps
export const selectMaxLifePoints = (state: RootState) => state.sheetBuilder.sheet.preview.lifePoints.max
export const selectMaxManaPoints = (state: RootState) => state.sheetBuilder.sheet.preview.manaPoints.max

export default sheetBuilderSliceSheetPreview