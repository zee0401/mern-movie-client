import React, { useState } from "react";
import Grid2 from "@mui/material/Grid2";
import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

const movieData = {
  title: "Batman Begins",
  year: "2005",
  img: "https://www.omdbapi.com/src/poster.jpg",
};

const movies = Array(40).fill(movieData);

const Movies = () => {
  const [page, setPage] = useState(1);
  const moviesPerPage = 12;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  return (
    <>
      <Stack spacing={2}>
        <Grid2 container sx={{ justifyContent: "center" }} spacing={2}>
          {currentMovies.map((movie, index) => (
            <Grid2 xs={12} sm={4} md={3} lg={2} key={index}>
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
