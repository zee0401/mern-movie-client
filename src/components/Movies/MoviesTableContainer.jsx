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
} from "@mui/material";

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
  color: theme.palette.text.secondary,
}));

const MoviesTableContainer = ({ movies }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {movies.map((movie, index) => (
            <TableRow key={movie._id || movie.id}>
              {" "}
              <TableCell sx={{ padding: "5px", width: "10px" }}>
                <img
                  src={movie.image}
                  alt={movie.name}
                  width="80px"
                  style={{ borderRadius: "5px" }}
                />
              </TableCell>
              <TableCell>
                <Stack direction="column" spacing={1}>
                  <Typography variant="subtitle1" component="div">
                    {index + 1}. {movie.name}
                  </Typography>
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
                    <Typography variant="subtitle2" color="text.secondary">
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
  );
};

export default MoviesTableContainer;
