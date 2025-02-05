import { axiosInstance } from "../utility/axiosInstance";

export const getAllMovies = async () => {
  const response = await axiosInstance.get("/movies/all-movies");
  console.log(response.data, "response");
  return response.data;
};

export const singleMovie = async (id) => {
  const response = await axiosInstance.get(`/movies/single-movie/${id}`);
  console.log(response.data, "response");
  return response.data;
};

export const searchMovies = async (searchTerm = "", sortBy = "") => {
  sortBy = sortBy || "rating";
  const response = await axiosInstance.get(
    `/movies/search?searchTerm=${searchTerm}&sortBy=${sortBy}`
  );
  console.log(response.data, "response");
  return response.data;
};

export const addMovie = async (movie) => {
  console.log(movie, "movie");
  try {
    const response = await axiosInstance.post("/movies/add-movie", movie);
    return response.data;
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
};

export const editMovie = async (movie, id) => {
  try {
    const response = await axiosInstance.put(
      `/movies/update-movie/${id}`,
      movie
    );
    return response.data;
  } catch (error) {
    console.error("Error editing movie:", error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await axiosInstance.delete(`/movies/delete-movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting movie:", error);
    throw error;
  }
};
