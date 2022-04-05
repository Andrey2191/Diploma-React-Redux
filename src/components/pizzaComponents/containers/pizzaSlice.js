import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async function (_, { rejectWithValue, getState }) {
    try {
      const token = getState().user.token;

      // If we have a token set in state, let's assume that we should be passing it.

      const items = [];
      const pizzas = await axios.get("http://localhost:5000/pizzas", {
        headers: { authorization: `Bearer ${token}` },
      });
      pizzas.data.map((pizza) => items.push(pizza));

      // pizzas.data.map((qwe) =>
      //   qwe.ingredients.map((rrr) => console.log(rrr.name, rrr.price))
      // );

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
