import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    adminDetails: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.adminDetails = action.payload.adminDetails;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.adminDetails = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
