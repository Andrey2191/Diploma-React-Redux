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

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async function () {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    const data = await querySnapshot.json();

    return data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    status: null,
    error: null,
  },
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
