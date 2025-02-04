import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/moviesApi";
import Movies from "../components/Movies/Movies";
import { Stack } from "@mui/material";
import SearchBox from "../components/Search/SearchBox";
import SortByDropdown from "../components/sort/SortBy";

const BrowseMovies = () => {
  const [params] = useSearchParams();

  const searchParams = params.get("search") || "";
  const sortParams = params.get("sortBy") || "rating";

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", searchParams, sortParams],
    queryFn: () => searchMovies(searchParams, sortParams),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        width="100%"
        sx={{ marginBottom: "1rem" }}
      >
        <SearchBox />
        <SortByDropdown />
      </Stack>
      {movies.length === 0 ? (
        <div>No movies found</div>
      ) : (
        <Movies movies={movies} />
      )}
    </div>
  );
};

export default BrowseMovies;
