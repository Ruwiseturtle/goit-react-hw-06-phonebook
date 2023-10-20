import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phoneBookReducer } from './phoneBookSlice';

const postDetailsConfig = {
  key: 'contactBook',
  storage,
  whitelist: ['contacts'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactBook: persistReducer(postDetailsConfig, phoneBookReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
