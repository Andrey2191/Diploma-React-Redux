import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

export const register = createAsyncThunk(
  "register",
  async ({ email, password }, thunkAPI) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch(console.error);
  }
);

export default createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});
