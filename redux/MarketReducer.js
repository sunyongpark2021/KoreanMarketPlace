import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    inMarket: [],
  },
  reducers: {
    loadShoppingList: (state, action) => {
      state.inMarket.push.apply(state.inMarket, action.payload.list);
    },
  },
});

export const loadShoppingList = shoppingListSlice.actions.loadShoppingList;
export default shoppingListSlice.reducer;
