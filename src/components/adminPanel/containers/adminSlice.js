import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (_, { rejectWithValue, getState }) {
    try {
      const token = getState().user.token;
      const items = [];

      const users = await axios.get("http://localhost:5000/user", {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(users);

      return users;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.message });
    }
  }
);

const adminSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    error: null,
    isLoaded: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
      state.isLoaded = true;
    },
    [fetchUsers.rejected]: (state, action) => {},
  },
});

export default adminSlice.reducer;
