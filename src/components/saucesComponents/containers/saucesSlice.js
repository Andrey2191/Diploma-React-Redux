import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSauces = createAsyncThunk(
  "sauces/fetchSauces",
  async function (_, { rejectWithValue }) {
    try {
      const items = [];
      const sauces = await axios.get("http://localhost:5000/sauces");
      sauces.data.map((sauce) => items.push(sauce));
      return items;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.message });
    }
  }
);

const saucesSlice = createSlice({
  name: "sauces",
  initialState: {
    sauces: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchSauces.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSauces.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.sauces = action.payload;
    },
    [fetchSauces.rejected]: (state, action) => {},
  },
});

export default saucesSlice.reducer;
