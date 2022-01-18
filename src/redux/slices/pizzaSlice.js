import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async function (_, { rejectWithValue }) {
    try {
      const items = [];
      const q = query(collection(db, "pizzas"));
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
// export const fetchPizzas = createAsyncThunk(
//   "pizzas/fetchPizzas",
//   async function () {
//     const q = query(collection(db, "pizzas"));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   }
// );

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
