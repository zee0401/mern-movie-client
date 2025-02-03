import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

import { convertedDate } from "../../utility/dateConvert";
import { movieDurationFormat } from "../../utility/movieDurationFormat";

const MovieForm = ({ moviebyId, id }) => {
  const { name, description, duration, rating, releaseDate } = moviebyId || {};

  // Extract hours and minutes from duration if editing
  const formattedDuration = duration ? movieDurationFormat(duration) : "";
  const durationMatch = formattedDuration.match(/(\d+)h (\d+)m/);
  const initialHours = durationMatch ? parseInt(durationMatch[1]) : "";
  const initialMinutes = durationMatch ? parseInt(durationMatch[2]) : "";

  const [formData, setFormData] = useState({
    title: name || "",
    description: description || "",
    hours: initialHours, // Separate hours input
    minutes: initialMinutes, // Separate minutes input
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

    // Combine hours and minutes into "Xh Ym" format
    const combinedDuration = `${formData.hours}h ${formData.minutes}m`;

    const submittedData = {
      name,
      releaseDate,
      rating,
      description,
      duration: combinedDuration,
    };

    console.log("Submitted Movie Data:", submittedData);
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

      {/* Duration Field (Hours + Minutes in the same row) */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="body2">Duration</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Hours"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            type="number"
            required
            fullWidth
            inputProps={{ min: 0 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Minutes"
            name="minutes"
            value={formData.minutes}
            onChange={handleChange}
            type="number"
            required
            fullWidth
            inputProps={{ min: 0, max: 59 }}
          />
        </Grid>
      </Grid>

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
