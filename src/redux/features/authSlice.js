import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    adminDetails: null,
    isAuthenticated: !!Cookies.get("jwt"),
  },
  reducers: {
    login: (state, action) => {
      state.adminDetails = action.payload.adminDetails;
      state.isAuthenticated = true;
      Cookies.set("jwt", action.payload.token);
    },
    logout: (state) => {
      state.adminDetails = null;
      state.isAuthenticated = false;
      Cookies.remove("jwt");
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { login, logout, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
