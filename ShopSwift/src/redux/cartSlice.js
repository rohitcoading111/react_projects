import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};
const saveCart = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
  addToCart: (state, action) => {
  const existingItem = state.cartItems.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cartItems.push({
      ...action.payload,
      quantity: 1,
    });
  }

  saveCart(state.cartItems);
},
increaseQuantity: (state, action) => {
  const item = state.cartItems.find(
    (item) => item.id === action.payload
  );

  if (item) {
    item.quantity += 1;
  }

  saveCart(state.cartItems);
},

decreaseQuantity: (state, action) => {
  const item = state.cartItems.find(
    (item) => item.id === action.payload
  );

  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }

  saveCart(state.cartItems);
},

removeFromCart: (state, action) => {
  state.cartItems = state.cartItems.filter(
    (item) => item.id !== action.payload
  );
  saveCart(state.cartItems);
},
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;