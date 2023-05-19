import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartEdit.js";
import shoppingListReducer from "./MarketReducer.js";

export const store = configureStore({
  reducer: {
    cartList: cartReducer,
    shopList: shoppingListReducer,
  },
});
