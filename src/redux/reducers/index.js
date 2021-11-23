import { combineReducers } from "redux";

import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart";
import sauces from "./sauces";

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
  sauces,
});

export default rootReducer;
