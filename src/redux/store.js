import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import todoReducer from './modules/todo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo'],
};

const _persitedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: _persitedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

export const persistor = persistStore(store);
