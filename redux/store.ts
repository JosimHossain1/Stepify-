import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/Features/Cart/CartSlice';

import { persistStore, persistReducer, WebStorage } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

export function createPersistStore(): WebStorage {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createPersistStore();

const persistConfig = {
  key: 'root',
  version : 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
