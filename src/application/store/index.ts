import { configureStore } from '@reduxjs/toolkit'
import { sheetBuilderReducer } from './slices/sheetBuilder/sheetBuilderSlice';

const store = configureStore({
  reducer: {
    sheetBuilder: sheetBuilderReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;