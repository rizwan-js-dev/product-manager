// lib/redux/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    items: [
        {id:'3',name:'Apple',price:'5', category: 'Fruits'},
        {id:'1',name:'Product1',price:'50', category: 'Veg'},
        {id:'2',name:'Product2',price:'500', category: 'Veg'}
    ],
    // Other state properties related to todos
  };

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
      addProduct: (state, action) => {
        console.log(action.payload)
        state.items.push({...action.payload , id: action.payload.id+1 });
        console.log(state.items.product)
      },
      updateProduct: (state, action) => {
        console.log(action.payload)
        const index = state.items.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      },
      deleteProduct: (state, action) => {
        state.items = state.items.filter(product => product.id !== action.payload);
      },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;