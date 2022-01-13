import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
  email: null,
  token: null,
  id: null,
};

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.email = action.payload.email;
//       state.token = action.payload.token;
//       state.id = action.payload.id;
//     },
//     removeUser(state) {
//       state.email = null;
//       state.token = null;
//       state.id = null;
//     },
//   },
// });

// export const { setUser, removeUser } = userSlice.actions;

// export default userSlice.reducer;

// const provider = new firebase.auth.GoogleAuthProvider();

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch(() => alert("Пользователь не найден"));
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
    builder.addCase(login.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    });
    builder.addCase(login.rejected, (state, action) => {
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

// export const { setUser } = userSlice.actions;

// export default userSlice.reducer;
