import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartEdit.js";

export const store = configureStore({
  reducer: {
    cartList: cartReducer,
  },
});
