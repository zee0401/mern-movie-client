import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Grid2";
import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, duration } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../api/moviesApi";

const Movies = () => {
  const [page, setPage] = useState(1);
  const moviesPerPage = 15;

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["movies"], queryFn: getAllMovies });

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  console.log("movies", movies);

  const startIndex = (page - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Stack spacing={2}>
        <Grid2 container sx={{ justifyContent: "center" }} spacing={2}>
          {currentMovies.map((movie, index) => (
            <Grid2 xs={24} sm={4} md={3} lg={2} key={index}>
              <MovieCard movie={movie} />
            </Grid2>
          ))}
        </Grid2>
        <Box display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(movies.length / moviesPerPage)}
            page={page}
            onChange={handlePageChange}
            boundaryCount={2}
            color="secondary"
          />
        </Box>
      </Stack>
    </>
  );
};

export default Movies;
