'use client';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
