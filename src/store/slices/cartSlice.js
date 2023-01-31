import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalItems: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceCartData(state, action) {
      const cartFromStorage = action.payload;
      state.cartItems = cartFromStorage.cartItems;
      state.totalAmount = cartFromStorage.totalAmount;
      state.totalItems = cartFromStorage.totalItems;
      state.showCart = cartFromStorage.showCart;
      state.changed = cartFromStorage.changed;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const exist = state.cartItems.find((item) => item.id === newItem.id);

      if (exist) {
        exist.qty++;
        exist.total = exist.qty * exist.price;
      } else {
        state.cartItems.push({ ...newItem, qty: 1, total: newItem.price });
        state.totalItems++;
      }
      state.totalAmount += newItem.price;
    },
    removeFromCart(state, action) {
      state.changed = true;

      const id = action.payload;
      const exist = state.cartItems.find((item) => item.id === id);
      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== exist.id
        );
        state.totalItems--;
      } else {
        exist.qty--;
        exist.total = exist.qty * exist.price;
      }
      state.totalAmount -= exist.price;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
