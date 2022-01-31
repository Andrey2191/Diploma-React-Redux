import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  count: {},
  totalPrice: 0,
  totalCount: 0,
};

export const addPizzaToCart = createAction("ADD_PIZZA_CART");
export const removeCartItem = createAction("REMOVE_CART_ITEM");

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPizzaToCart, (state, action) => {
      const { id, size, price } = action.payload;

      if (!state.items?.[id]) {
        state.items[id] = {};
      }

      const countBySize = state.items?.[id]?.[size];
      state.count[id] = state.count?.[id] ? state.count[id] + 1 : 1;
      state.items[id][size] = countBySize ? countBySize + 1 : 1;
      state.totalPrice = state.totalPrice + price;
      state.totalCount = state.totalCount + 1;
    })

    .addCase(removeCartItem, (state, action) => {
      const { id, size, price } = action.payload;

      const countBySize = state.items?.[id]?.[size];
      state.count[id] = state.count?.[id] ? state.count[id] - 1 : 1;
      state.items[id][size] = countBySize ? countBySize - 1 : 1;
      state.totalPrice = state.totalPrice - price;
      state.totalCount = state.totalCount - 1;
    });
});

export default cartReducer;
