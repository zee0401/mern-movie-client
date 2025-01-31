import React, { useState } from "react";
import { TextField, Button, Box, Typography, styled } from "@mui/material";

import { convertedDate } from "../../utility/dateConvert";
import { movieDurationFormat } from "../../utility/movieDurationFormat";

const MovieForm = ({ moviebyId, id }) => {
  const { name, description, duration, rating, releaseDate } = moviebyId || {};

  const [formData, setFormData] = useState({
    title: name || "",
    description: description || "",
    duration: (duration && movieDurationFormat(duration)) || "",
    rating: rating || "",
    year: (releaseDate && convertedDate(releaseDate)) || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 4,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" mb={3}>
        {moviebyId ? "Edit Movie" : "Add Movie"}
      </Typography>

      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
        color="primary"
      />

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />

      <TextField
        label="Duration (in minutes)"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        type="string"
        required
        fullWidth
        margin="normal"
        inputProps={{ min: 1 }}
      />

      <TextField
        label="Rating"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        type="number"
        required
        fullWidth
        margin="normal"
        inputProps={{ min: 0, max: 10, step: 0.1 }}
        helperText="Enter a rating between 0 and 10"
      />

      <TextField
        label="Year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        type="number"
        required
        fullWidth
        margin="normal"
        inputProps={{ min: 1888, max: new Date().getFullYear() }}
        helperText="Enter a valid year"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
      >
        {moviebyId ? "Update Movie" : "Add Movie"}
      </Button>
    </Box>
  );
};

export default MovieForm;
