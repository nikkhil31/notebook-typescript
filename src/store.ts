import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/categorySlice'
import notesReducer from './slices/notesSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    notes: notesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
