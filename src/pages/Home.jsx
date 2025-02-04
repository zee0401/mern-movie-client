import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../api/moviesApi";

import Movies from "../components/Movies/Movies";

const Home = () => {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });

  return (
    <div>
      <Movies movies={movies} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Home;
