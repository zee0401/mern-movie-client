import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../api/moviesApi";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useState } from "react";

const MovieTable = () => {
  const [sortBy, setSortBy] = useState("rating");
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });

  console.log(movies);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          value={sortBy}
          label="Sort By"
          onChange={handleSortChange}
        >
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="releaseDate">Release Date</MenuItem>
          <MenuItem value="title">Title</MenuItem>
        </Select>
      </FormControl>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie._id || movie.id}>
                {" "}
                <TableCell>
                  <img src={movie.image} alt={movie.name} width="60" />
                </TableCell>
                <TableCell>{movie.name}</TableCell>
                <TableCell>{movie.description}</TableCell>
                <TableCell>{movie.rating}</TableCell>{" "}
                <TableCell>{movie.releaseDate}</TableCell>
                <TableCell>
                  <BorderColorRoundedIcon color="edit" />
                </TableCell>
                <TableCell>
                  <DeleteForeverRoundedIcon color="delete" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MovieTable;
