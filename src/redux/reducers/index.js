import { combineReducers } from "redux";

import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";
import sauces from "./sauces";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
  sauces,
  user: userReducer,
});

export default rootReducer;
