import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuildingSheet, OutOfGameContext, SerializedSheetInterface, SheetSerializer } from 't20-sheet-builder';

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

export default sheetBuilderSliceSheetPreview