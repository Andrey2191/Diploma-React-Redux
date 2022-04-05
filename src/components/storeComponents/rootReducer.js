import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../authorization/containers/slice/userSlice";
import orderReducer from "../OrderHistoryComponents/containers/orderSlice";
import pizzaReducer from "../pizzaComponents/containers/pizzaSlice";
import saucesReducer from "../saucesComponents/containers/saucesSlice";
import cartReducer from "../cartComponents/containers/cartReducer/cartReducer";
import adminReducer from "../adminPanel/containers/adminSlice";
import { pizzasApi } from "../pizzaComponents/containers/PizzaQuery";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
  cart: cartReducer,
  sauces: saucesReducer,
  user: userReducer,
  orders: orderReducer,
  admin: adminReducer,
  [pizzasApi.reducerPath]: pizzasApi.reducer,
});

export default persistReducer(persistConfig, rootReducer);
