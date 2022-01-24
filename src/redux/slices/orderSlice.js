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
import { addDoc } from "firebase/firestore";

const initialState = {
  orders: [],
  status: null,
  error: null,
};

export const fetchOrder = createAsyncThunk(
  "orders/fetchOrder",
  async function (_, { rejectWithValue }) {
    try {
      const orders = [];
      const q = query(collection(db, "usersOrder"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const order = doc.data();
        // console.log(doc.id, " => ", doc.data());
        orders.push(order);
      });
      return orders;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.message });
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchOrder.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.orders = action.payload;
    },
    [fetchOrder.rejected]: (state, action) => {},
  },
});

export default orderSlice.reducer;
