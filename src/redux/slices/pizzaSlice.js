import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async function (sortBy, category) {
    const response = await fetch(
      `http://localhost:3333/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=desc`
    );

    const data = await response.json();

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    status: null,

    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.pizzas = action.payload;
    },
    [fetchPizzas.rejected]: (state, action) => {},
  },
});
