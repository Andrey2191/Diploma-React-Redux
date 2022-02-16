import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const initialState = { email: null, token: null, id: null, error: null };

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.message });
    }
  }
);

const userSlice = createSlice({
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
      state.token = action.payload.accessToken;
      state.id = action.payload.uid;
      state.error = null;
    });

    builder.addCase(logout.fulfilled, () => initialState);
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected")
      // (state, action) => {
      //   console.log(action);
      //   state.error = action.payload.error;
      // }
    );
  },
});

// export const { setUser } = userSlice.actions;

export default userSlice.reducer;
