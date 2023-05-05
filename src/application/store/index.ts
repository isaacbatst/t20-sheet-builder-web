import { configureStore } from '@reduxjs/toolkit'
import sheetBuilderSlice from './slices/sheetBuilder/sheetBuilderSlice'

const store = configureStore({
  reducer: {
    sheetBuilder: sheetBuilderSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;