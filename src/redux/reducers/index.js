import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";
import sauces from "./sauces";
import userReducer from "../slices/userSlice";
import orderReducer from "../slices/orderSlice";
import pizzaReducer from "../slices/pizzaSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filters", "pizzas", "cart", "sauces", "user"],
};

const rootReducer = combineReducers({
  filters,
  pizzas: pizzaReducer,
  cart,
  sauces,
  user: userReducer,
  orders: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
