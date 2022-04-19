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
    addedIngredients: {},
    totalPrice: 0,
    status: null,
    error: null,
    isLoaded: null,
  },
  reducers: {
    addIngredient(state, action) {
      const { _id, price } = action.payload;
      const ingredient_key = _id;
      const addedIngredient = { ...action.payload };
      console.log(action.payload);
      if (!state.addedIngredients[ingredient_key]) {
        state.addedIngredients[ingredient_key] = addedIngredient;
      }

      state.totalPrice += addedIngredient.price;
    },
  },
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
export const { addIngredient } = ingredientsSlice.actions;
