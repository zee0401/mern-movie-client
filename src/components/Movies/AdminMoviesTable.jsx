import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../api/moviesApi";

import MoviesTableContainer from "./MoviesTableContainer";

const MovieTable = () => {
  const {
    data: movies = [],
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });

  if (isFetching) {
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
