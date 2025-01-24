import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Backend API
  withCredentials: true, // Include cookies/auth headers
});
