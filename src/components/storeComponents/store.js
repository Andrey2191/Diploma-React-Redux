import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
