import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { searchMovies } from "../api/moviesApi";
import Movies from "../components/Movies/Movies";
import { Stack } from "@mui/material";
import SearchBox from "../components/Search/SearchBox";
import SortByDropdown from "../components/sort/SortBy";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("search");

  const [searchTerm, setSearchTerm] = useState(params);

  const onSearchClick = () => {
    setSearchParams({ search: searchTerm });
  };

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", params],
    queryFn: () => searchMovies(params),
    enabled: !!params,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        width="100%"
        sx={{ marginBottom: "1rem" }}
      >
        <SearchBox
          style={{ width: "100%" }}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSearchClick={onSearchClick}
        />
        <SortByDropdown style={{ width: "100%" }} />
      </Stack>
      {movies.length === 0 ? (
        <div>No movies found</div>
      ) : (
        <Movies movies={movies} isLoading={isLoading} error={error} />
      )}
    </div>
  );
};

export default Search;
