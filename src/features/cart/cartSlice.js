import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      
    },
    removeItemFromCart: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    increaseAmountItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseAmountItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      if (cartItem.amount <= 1) {
        cartItem.amount = 1;
      }
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = Number(total);
    },
  },
});

export const {
  clearCart,
  removeItemFromCart,
  increaseAmountItem,
  decreaseAmountItem,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
