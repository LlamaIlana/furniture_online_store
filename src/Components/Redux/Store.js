import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Create the store
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Subscribe to the store changes
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("myLocalStore", JSON.stringify(state.cart));
});

export default store;
