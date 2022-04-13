import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async function (_, { rejectWithValue, getState }) {
    try {
      const token = getState().user.token;

      const items = [];
      const ingredients = await axios.get("http://localhost:5000/ingredients", {
        headers: { authorization: `Bearer ${token}` },
      });
      ingredients.data.map((ingredient) => items.push(ingredient));
      console.log(items);
      return items;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.message });
    }
  }
);

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredients: [],
    status: null,
    error: null,
    isLoaded: null,
  },
  reducers: {},
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.ingredients = action.payload;
      state.isLoaded = true;
    },
    [fetchIngredients.rejected]: (state, action) => {},
  },
});

export default ingredientsSlice.reducer;
