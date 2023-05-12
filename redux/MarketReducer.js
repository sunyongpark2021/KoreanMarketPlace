import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    shoppingList: [],
    inMarket: [],
  },
  reducers: {
    loadShoppingList: (state, action) => {
      state.shoppingList.push(action.payload.list);
    },
  },
});

export const shoppingList = shoppingListSlice.actions.loadShoppingList;
export default shoppingListSlice.reducer;
