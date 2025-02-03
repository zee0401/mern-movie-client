import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Grid2";
import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

const Movies = ({ movies, isLoading, error }) => {
  const [page, setPage] = useState(1);
  const moviesPerPage = 15;

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Reset page if the movies list changes and current page is out of bounds
  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [movies, totalPages]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message}</div>;
  if (!movies || movies.length === 0) return <div>No movies found</div>;

  return (
    <Stack spacing={2}>
      <Grid2 container sx={{ justifyContent: "center" }} spacing={2}>
        {currentMovies.map((movie, index) => (
          <Grid2 xs={24} sm={4} md={3} lg={2} key={index}>
            <MovieCard movie={movie} />
          </Grid2>
        ))}
      </Grid2>

      {movies.length > moviesPerPage && (
        <Box display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            boundaryCount={2}
            color="secondary"
          />
        </Box>
      )}
    </Stack>
  );
};

export default Movies;
