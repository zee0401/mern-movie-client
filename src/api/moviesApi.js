import { axiosInstance } from "../utility/axiosInstance";

export const getAllMovies = async () => {
  const response = await axiosInstance.get("/movies/all-movies");
  console.log(response.data, "response");
  return response.data;
};
