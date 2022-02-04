import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filters from "../../redux/reducers/filters";

import userReducer from "../authorization/slice/userSlice";
import orderReducer from "../OrderHistoryComponents/orderSlice";
import pizzaReducer from "../pizzaComponents/pizzaSlice/pizzaSlice";
import saucesReducer from "../saucesComponents/saucesSlice";
import cartReducer from "../cartComponents/cartReducer/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  filters,
  pizzas: pizzaReducer,
  cart: cartReducer,
  sauces: saucesReducer,
  user: userReducer,
  orders: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
