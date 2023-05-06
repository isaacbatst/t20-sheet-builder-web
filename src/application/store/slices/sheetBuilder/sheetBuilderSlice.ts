import { combineReducers } from "redux";
import sheetBuilderSliceInitialAttributes from "./sheetBuilderSliceInitialAttributes";
import sheetBuilderSliceRaceDefinition from "./sheetBuilderSliceRaceDefinition";
import sheetBuilderSliceRoleDefinition from "./sheetBuilderSliceRoleDefinition";

export const sheetBuilderReducer = combineReducers({
  initialAttributes: sheetBuilderSliceInitialAttributes.reducer,
  race: sheetBuilderSliceRaceDefinition.reducer,
  role: sheetBuilderSliceRoleDefinition.reducer
})