import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchSauces = createAsyncThunk(
  "sauces/fetchSauces",
  async function (_, { rejectWithValue }) {
    try {
      const items = [];
      const q = query(collection(db, "sauces"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        items.push(item);
      });
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
