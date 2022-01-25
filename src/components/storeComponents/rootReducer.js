import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filters from "../../redux/reducers/filters";
import cart from "../../redux/reducers/cart";
import userReducer from "../authorization/slice/userSlice";
import orderReducer from "../OrderHistoryComponents/orderSlice";
import pizzaReducer from "../pizzaComponents/pizzaSlice/pizzaSlice";
import saucesReducer from "../saucesComponents/saucesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filters", "pizzas", "cart", "sauces", "user"],
};

const rootReducer = combineReducers({
  filters,
  pizzas: pizzaReducer,
  cart,
  sauces: saucesReducer,
  user: userReducer,
  orders: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
