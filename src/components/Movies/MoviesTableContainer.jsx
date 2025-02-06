import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Stack,
  Typography,
  Box,
  styled,
  Button,
  Modal,
  TablePagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import StarIcon from "@mui/icons-material/Star";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { convertedDate } from "../../utility/dateConvert";
import { movieDurationFormat } from "../../utility/movieDurationFormat";
import SingleMovie from "./SingleMovie";
import { deleteMovie } from "../../api/moviesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2px",
  color: theme.palette.text.gray,
}));

const style = {
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

const btnStyle = {
  padding: 0,
  minWidth: "auto",
  width: "fit-content",
  maxWidth: "100%",
  background: "none",
  boxShadow: "none",
  textTransform: "none",
  justifyContent: "flex-start",
};

const MoviesTableContainer = ({ movies }) => {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const queryClient = useQueryClient();

  const handleOpen = (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
    console.log(selectedMovie);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMovie(null);
  };

  const mutation = useMutation({
    mutationFn: (id) => deleteMovie(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies", "single-movie"] });
    },
    onError: (error) => {
      console.error("Error deleting movie:", error);
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            {movies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((movie, index) => (
                <TableRow key={movie._id || movie.id}>
                  <TableCell sx={{ padding: "5px", maxWidth: "80px" }}>
                    <Button
                      onClick={() => handleOpen(movie)}
                      disableRipple
                      style={btnStyle}
                    >
                      <img
                        src={
                          movie.image ||
                          "https://edit.org/img/blog/lfq-movie-poster-template-cover-maker-online-free-creator.webp"
                        }
                        alt={movie.name}
                        width="80px"
                        style={{ borderRadius: "5px" }}
                      />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Stack direction="column" spacing={1}>
                      <Button
                        onClick={() => handleOpen(movie)}
                        disableRipple
                        style={btnStyle}
                      >
                        <Typography variant="subtitle1" component="div">
                          {index + 1 + page * rowsPerPage}. {movie.name}
                        </Typography>
                      </Button>
                      <Typography
                        variant="caption"
                        sx={{ color: "#808b94", paddingBottom: "10px" }}
                      >
                        {movie.description}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <InfoItem>
                        <StarIcon sx={{ fontSize: 18, color: "#FFD700" }} />
                        <Typography variant="subtitle2" color="text.gray">
                          {movie.rating}
                        </Typography>
                      </InfoItem>
                      <InfoItem>
                        <TodayIcon sx={{ fontSize: 18 }} />
                        <Typography variant="body2">
                          {convertedDate(movie.releaseDate)}
                        </Typography>
                      </InfoItem>
                      <InfoItem>
                        <AccessTimeIcon sx={{ fontSize: 18 }} />
                        <Typography variant="body2">
                          {movieDurationFormat(movie.duration)}
                        </Typography>
                      </InfoItem>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Link to={`/admin/update-movie/${movie._id}`}>
                      <BorderColorRoundedIcon color="edit" />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteForeverRoundedIcon
                      onClick={() => handleDelete(movie._id)}
                      color="delete"
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={movies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={style}
      >
        <SingleMovie movie={selectedMovie} onClose={handleClose} />
      </Modal>
    </>
  );
};

export default MoviesTableContainer;
