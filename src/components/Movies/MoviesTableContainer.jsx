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

import { useState } from "react";

import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import StarIcon from "@mui/icons-material/Star";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { convertedDate } from "../../utility/dateConvert";
import { movieDurationFormat } from "../../utility/movieDurationFormat";

const InfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2px",
  color: theme.palette.text.gray,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  p: 4,
  textAlign: "center",
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {movies
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((movie, index) => (
              <TableRow key={movie._id || movie.id}>
                <TableCell sx={{ padding: "5px", maxWidth: "80px" }}>
                  <Button onClick={handleOpen} disableRipple style={btnStyle}>
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
                    <Button onClick={handleOpen} disableRipple style={btnStyle}>
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
                  <Button>
                    <BorderColorRoundedIcon color="edit" />
                  </Button>
                </TableCell>
                <TableCell>
                  <DeleteForeverRoundedIcon color="delete" />
                </TableCell>
              </TableRow>
            ))}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div style={style}>hello</div>
          </Modal>
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
  );
};

export default MoviesTableContainer;
