import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../api/moviesApi";
import { Stack } from "@mui/material";
import Movies from "../components/Movies/Movies";
import SearchBox from "../components/Search/SearchBox";
import SortByDropdown from "../components/sort/SortBy";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(`/search-movies?search=${searchTerm}`);
  };

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
          onSearchClick={handleSearchClick}
        />
        <SortByDropdown
          style={{ width: "100%" }}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </Stack>

      <Movies
        movies={movies}
        isLoading={isLoading}
        error={error}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Home;
