import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { movieDurationFormat } from "../../utility/movieDurationFormat";
import ClearIcon from "@mui/icons-material/Clear";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  gap: 4,
  position: "relative",
};

const imageStyle = {
  width: "250px",
  height: "350px",
  borderRadius: "8px",
  objectFit: "cover",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
};

const closeIconStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  cursor: "pointer",
  border: "1px solid #f6f5f5",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const SingleMovieModal = ({ movie, onClose }) => {
  return (
    <Container maxWidth="md" sx={modalStyle}>
      <Box sx={closeIconStyle}>
        <ClearIcon onClick={onClose} />
      </Box>
      <img src={movie.image} alt={movie.name} style={imageStyle} />
      <Box sx={contentStyle}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {movie.name}
        </Typography>
        <Typography variant="body1" color="gray" paragraph>
          {movie.description}
        </Typography>
        <Stack spacing={1}>
          <Typography variant="subtitle1">
            <strong style={{ color: "#FF9800" }}>Rating:</strong> {movie.rating}
          </Typography>
          <Typography variant="subtitle1">
            <strong style={{ color: "#FF9800" }}>Release Date:</strong>{" "}
            {movie.releaseDate}
          </Typography>
          <Typography variant="subtitle1">
            <strong style={{ color: "#FF9800" }}>Duration:</strong>{" "}
            {movieDurationFormat(movie.duration)}{" "}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default SingleMovieModal;
