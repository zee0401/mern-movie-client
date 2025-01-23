// utils/axiosInstance.js
import axios from "axios";
import store from "../store"; // Import your Redux store
import { logout } from "../features/authSlice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout()); // Log out the user if the token is invalid
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
