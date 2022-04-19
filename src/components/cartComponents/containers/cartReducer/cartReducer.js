import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  saucesItems: {},
  customPizza: {},
  count: {},
  totalPrice: 0,
  totalCount: 0,
};

export const addPizzaToCart = createAction("ADD_PIZZA_CART");
export const removeCartItem = createAction("REMOVE_CART_ITEM");
export const removeCartSaucesItem = createAction("REMOVE_CART_SAUCES");
export const clearCart = createAction("CLEAR_CART ");
export const plusCartItem = createAction("PLUS_CART_ITEM");
export const minusCartItem = createAction("MINUS_CART_ITEM");
export const addSaucesToCart = createAction("ADD_SAUCES_CART");
export const plusCartSaucesItem = createAction("PLUS_CART_SAUCES");
export const minusCartSaucesItem = createAction("MINUS_CART_SAUCES");
export const addCustomPizzaToCart = createAction("ADD_CUSTOM_PIZZA");

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCustomPizzaToCart, (state, action) => {
      const { _id, price } = action.payload;
      const customPizza_key = _id;
      const addedCustomPizza = { ...action.payload };

      if (!state.customPizza[customPizza_key]) {
        addedCustomPizza.count = 1;
        addedCustomPizza.totalPrice = addedCustomPizza.price;
        state.customPizza[customPizza_key] = addedCustomPizza;
      } else {
        state.customPizza[customPizza_key].totalPrice += addedCustomPizza.price;
        state.customPizza[customPizza_key].count++;
      }

      state.totalCount++;
      state.totalPrice += addedCustomPizza.price;
    })

    .addCase(addPizzaToCart, (state, action) => {
      const { _id, size, price, type, count } = action.payload;

      const pizza_key = _id + "_" + size + "_" + type;
      const addedPizza = { ...action.payload };

      if (type === "традиционное") {
        addedPizza.price = addedPizza.price + 3;
      }
      if (size === 30) {
        addedPizza.price = addedPizza.price + 3;
      }
      if (size === 40) {
        addedPizza.price = addedPizza.price + 5;
      }

      if (!state.items[pizza_key]) {
        addedPizza.count = 1;
        addedPizza.totalPrice = addedPizza.price;
        state.items[pizza_key] = addedPizza;
      } else {
        state.items[pizza_key].totalPrice += addedPizza.price;
        state.items[pizza_key].count++;
      }

      state.totalCount++;
      state.totalPrice += addedPizza.price;
    })
    .addCase(removeCartItem, (state, action) => {
      const key = action.payload;

      const items = { ...state.items };
      delete items[key];
      state.totalPrice = state.totalPrice - state.items[key].totalPrice;
      state.totalCount = state.totalCount - state.items[key].count;
      state.items = items;
    })
    .addCase(removeCartSaucesItem, (state, action) => {
      const key = action.payload;

      const saucesItems = { ...state.saucesItems };
      delete saucesItems[key];
      state.totalPrice = state.totalPrice - state.saucesItems[key].totalPrice;
      state.totalCount = state.totalCount - state.saucesItems[key].count;
      state.saucesItems = saucesItems;
    })
    .addCase(plusCartItem, (state, action) => {
      const key = action.payload;
      state.items[key].count++;
      state.totalCount++;
      state.items[key].totalPrice += state.items[key].price;
      state.totalPrice += state.items[key].price;

      state.items = { ...state.items };
    })
    .addCase(plusCartSaucesItem, (state, action) => {
      const key = action.payload;
      state.saucesItems[key].count++;
      state.totalCount++;
      state.saucesItems[key].totalPrice += state.saucesItems[key].price;
      state.totalPrice += state.saucesItems[key].price;

      state.saucesItems = { ...state.saucesItems };
    })
    .addCase(minusCartItem, (state, action) => {
      const key = action.payload;
      state.items[key].count--;
      state.totalCount--;

      state.items[key].totalPrice =
        state.items[key].totalPrice - state.items[key].price;
      state.totalPrice = state.totalPrice - state.items[key].price;

      state.items = { ...state.items };
    })
    .addCase(minusCartSaucesItem, (state, action) => {
      const key = action.payload;
      state.saucesItems[key].count--;

      state.saucesItems[key].totalPrice =
        state.saucesItems[key].totalPrice - state.saucesItems[key].price;
      state.totalPrice = state.totalPrice - state.saucesItems[key].price;

      state.saucesItems = { ...state.saucesItems };
    })
    .addCase(addSaucesToCart, (state, action) => {
      const { _id, price } = action.payload;
      const sauces_key = _id;
      const addedSauces = { ...action.payload };

      if (!state.saucesItems[sauces_key]) {
        addedSauces.count = 1;
        addedSauces.totalPrice = addedSauces.price;
        state.saucesItems[sauces_key] = addedSauces;
      } else {
        state.items[sauces_key].totalPrice += price;
        state.items[sauces_key].count++;
      }
      state.totalCount++;
      state.totalPrice += addedSauces.price;
    })
    .addCase(clearCart, (state) => {
      state.count = 0;
      state.items = {};
      state.sauces = {};
      state.totalPrice = 0;
      state.totalCount = 0;
    });
});

export default cartReducer;
