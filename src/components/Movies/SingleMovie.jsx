import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";

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

const fakeMovie = {
  name: "Inception",
  description: "A mind-bending thriller where dreams can be manipulated.",
  image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
  rating: "8.8",
  releaseDate: "2010-07-16",
  duration: "148",
};

const SingleMovieModal = () => {
  return (
    <Container maxWidth="md" sx={modalStyle}>
      <img src={fakeMovie.image} alt={fakeMovie.name} style={imageStyle} />
      <Box sx={contentStyle}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {fakeMovie.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {fakeMovie.description}
        </Typography>
        <Stack spacing={1}>
          <Typography variant="subtitle1">
            <strong>Rating:</strong> {fakeMovie.rating}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Release Date:</strong> {fakeMovie.releaseDate}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Duration:</strong> {fakeMovie.duration} minutes
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default SingleMovieModal;
