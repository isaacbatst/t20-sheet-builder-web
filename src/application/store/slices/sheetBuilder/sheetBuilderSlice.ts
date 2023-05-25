import { combineReducers } from "redux";
import sheetBuilderSliceInitialAttributes from "./sheetBuilderSliceInitialAttributes";
import sheetBuilderSliceRaceDefinition from "./sheetBuilderSliceRaceDefinition";
import sheetBuilderSliceRoleDefinition from "./sheetBuilderSliceRoleDefinition";
import sheetBuilderSliceSheetPreview from "./sheetBuilderSliceSheetPreview";
import sheetBuilderSliceForm from "./sheetBuilderSliceForm";
import sheetBuilderSliceOriginDefinition from "./sheetBuilderSliceOriginDefinition";

export const sheetBuilderReducer = combineReducers({
  initialAttributes: sheetBuilderSliceInitialAttributes.reducer,
  race: sheetBuilderSliceRaceDefinition.reducer,
  role: sheetBuilderSliceRoleDefinition.reducer,
  origin: sheetBuilderSliceOriginDefinition.reducer,
  sheet: sheetBuilderSliceSheetPreview.reducer,
  form: sheetBuilderSliceForm.reducer
})