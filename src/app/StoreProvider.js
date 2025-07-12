// app/StoreProvider.js
'use client'; // Mark as client component for App Router

import { Provider } from 'react-redux';
import { makeStore } from '../lib/redux/store';

export default function StoreProvider({ children }) {
  const store = makeStore(); // Create a new store instance for each request in SSR
  return <Provider store={store}>{children}</Provider>;
}