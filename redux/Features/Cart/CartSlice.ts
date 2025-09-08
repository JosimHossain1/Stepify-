// Slice creation process

import { createSlice } from '@reduxjs/toolkit';

// Step 1 : Intital State define
// Step 2 : Create a slice and export the slice
// Step 3 : Define a name of the slice then add initial value.
// Step 4 : add reducers object. Then we can create individual slice.
// Step 5 : Export all the reducer, destructure from slice name.action
// Step 6 : export default slice.reducer


export type cartState = {
  cart : object[],
  wishlist : object[]
}
const initialState : cartState = {
  cart: [],
  wishlist: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
