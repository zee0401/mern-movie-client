import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../api/moviesApi";

import MoviesTableContainer from "./MoviesTableContainer";

const MovieTable = () => {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <MoviesTableContainer movies={movies} />
    </div>
  );
};

export default MovieTable;
