import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  count: {},
  totalPrice: 0,
  totalCount: 0,
};

export const addPizzaToCart = createAction("ADD_PIZZA_CART");
export const removeCartItem = createAction("REMOVE_CART_ITEM");
export const clearCart = createAction("CLEAR_CART ");
export const plusCartItem = createAction("PLUS_CART_ITEM");
export const minusCartItem = createAction("MINUS_CART_ITEM");
export const addSaucesToCart = createAction("ADD_SAUCES_CART");

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPizzaToCart, (state, action) => {
      const { id, size, price, type, count } = action.payload;

      const pizza_key = id + "_" + size + "_" + type;

      const addedPizza = { ...action.payload };
      console.log(action.payload);
      if (!state.items[pizza_key]) {
        addedPizza.count = 1;
        addedPizza.totalPrice = price;
        state.items[pizza_key] = addedPizza;
      } else {
        state.items[pizza_key].totalPrice += price;
        state.items[pizza_key].count++;
      }

      state.totalCount++;
      state.totalPrice += price;

      if (type === "традиционное") {
        addedPizza.price = addedPizza.price + 3;
      }
    })

    .addCase(removeCartItem, (state, action) => {
      const { id, size, price, type, count } = action.payload;

      const pizza_key = id + "_" + size + "_" + type;

      const addedPizza = { ...action.payload };
    })

    .addCase(clearCart, (state, action) => {
      state.count = 0;
      state.items = {};
      state.totalPrice = 0;
      state.totalCount = 0;
    });
});

export default cartReducer;
