import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartedit",
  initialState: {
    inCart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.inCart.push(action.payload.id); //id needs to be defined and given as prop from dispatch function.
    },
    deleteFromCart: (state, action) => {
      state.inCart.splice(state.inCart.indexOf(action.payload.id), 1);
    },
  },
});

export const addToCart = cartSlice.actions.addToCart;
export const deleteFromCart = cartSlice.actions.deleteFromCart;
export default cartSlice.reducer;
