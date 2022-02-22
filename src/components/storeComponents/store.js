import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { pizzasApi } from "../pizzaComponents/query/PizzaQuery";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
