import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import thunk from "redux-thunk";

const initialState = {
  email: null,
  token: null,
  id: null,
};

export const register = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    const auth = getAuth();
    const { push } = useHistory();

    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      push("/");
    });
  }
);

export default createSlice({
  name: "register",
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
    // builder.addCase(logout.fulfilled, (state) => {
    //   state.email = null;
    //   state.token = null;
    //   state.id = null;
    // });
    // builder.addCase(logout.rejected, (state, action) => {
    //   state.error = action.error;
    // });
  },
});
