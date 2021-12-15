import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './modules/todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
