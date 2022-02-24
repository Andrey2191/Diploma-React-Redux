import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async function (_, { rejectWithValue }) {
    try {
      const items = [];
      const pizzas = await axios.get("http://localhost:5000/pizzas");
      pizzas.data.map((pizza) => items.push(pizza));
      console.log(pizzas.data);
      return items;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.message });
    }
  }
);

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState: {
    pizzas: [],
    status: null,
    error: null,
    isLoaded: null,
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
      state.isLoaded = true;
    },
    [fetchPizzas.rejected]: (state, action) => {},
  },
});

export default pizzaSlice.reducer;
