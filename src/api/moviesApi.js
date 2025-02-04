import { axiosInstance } from "../utility/axiosInstance";

export const getAllMovies = async () => {
  const response = await axiosInstance.get("/movies/all-movies");
  console.log(response.data, "response");
  return response.data;
};

export const singleMovie = async (id) => {
  console.log("id", id);
  const response = await axiosInstance.get(`/movies/${id}`);
  console.log(response.data, "response");
  return response.data;
};

export const searchMovies = async (searchTerm = "", sortBy = "") => {
  sortBy = sortBy || "rating";
  console.log("searchTerm", sortBy);
  const response = await axiosInstance.get(
    `/movies/search?searchTerm=${searchTerm}&sortBy=${sortBy}`
  );
  console.log(response.data, "response");
  return response.data;
};
