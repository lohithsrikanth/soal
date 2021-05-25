import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("username");
    },
  },
});

export const getUser = () => localStorage.getItem("username");
export const { login, logout } = slice.actions;
export default slice.reducer;
