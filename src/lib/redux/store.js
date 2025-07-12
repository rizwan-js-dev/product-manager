// lib/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Create this file later

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Add middleware here if needed
  });
};