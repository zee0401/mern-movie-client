import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    adminDetails: null,
    isAuthenticated: !!Cookies.get("jwt"),
    isChecking: true,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload, "actionpayload");
      state.adminDetails = action.payload.adminDetails;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.adminDetails = null;
      state.isAuthenticated = false;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setChecking: (state, action) => {
      state.isChecking = action.payload;
    },
  },
});

export const { login, logout, setAuthenticated, setChecking } =
  authSlice.actions;

export default authSlice.reducer;
