import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  orders: [],
  status: null,
  error: null,
};

export const fetchOrder = createAsyncThunk(
  "orders/fetchOrder",
  async function (_, { rejectWithValue }) {
    try {
      const items = [];
      const orders = await axios.get("http://localhost:5000/orders");
      orders.data.map((order) => items.push(order));
      return orders.data;
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
