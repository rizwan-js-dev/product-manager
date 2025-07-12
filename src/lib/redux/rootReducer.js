// lib/redux/rootReducer.js
import { combineReducers } from 'redux';
// Import your slice reducers here, e.g., import counterReducer from './features/counter/counterSlice';
import productReducer from '../redux/feature/product/productSlice'

const rootReducer = combineReducers({
  // counter: counterReducer,
  product : productReducer
  // Add other reducers here
});

export default rootReducer;