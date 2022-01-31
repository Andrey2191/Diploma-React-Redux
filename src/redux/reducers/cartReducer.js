import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  count: {},
  totalPrice: 0,
};

const addPizzaToCart = createAction("ADD_PIZZA_CART");

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPizzaToCart, (state, action) => {
    const { id, size, price } = action.payload;

    if (!state.items?.[id]) {
      state.items[id] = {};
    }

    const countBySize = state.items?.[id]?.[size];
    state.count[id] = state.count?.[id] ? state.count[id] + 1 : 1;
    state.items[id][size] = countBySize ? countBySize + 1 : 1;
    state.totalPrice = state.totalPrice + price;
  });
});

export default cartReducer;
