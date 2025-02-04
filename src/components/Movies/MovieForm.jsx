import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

import { convertedDate } from "../../utility/dateConvert";
import { movieDurationFormat } from "../../utility/movieDurationFormat";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addMovie, editMovie } from "../../api/moviesApi";
import { useNavigate } from "react-router";

const MovieForm = ({ moviebyId, id }) => {
  const { name, description, duration, rating, releaseDate, image } =
    moviebyId || {};

  const queryClient = useQueryClient();

  const formattedDuration = duration ? movieDurationFormat(duration) : "";
  const durationMatch = formattedDuration.match(/(\d+)h (\d+)m/);
  const initialHours = durationMatch ? parseInt(durationMatch[1]) : "";
  const initialMinutes = durationMatch ? parseInt(durationMatch[2]) : "";

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: name || "",
    description: description || "",
    hours: initialHours,
    minutes: initialMinutes,
    rating: rating || "",
    year: (releaseDate && convertedDate(releaseDate)) || "",
    image: image || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const mutation = useMutation({
    mutationFn: (formData) => {
      if (id) {
        return editMovie(formData, id);
      } else {
        return addMovie(formData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      navigate("/admin/all-movies");
    },
    onError: (error) => {
      console.error("Error adding movie:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedDuration = `PT${formData.hours}H${formData.minutes}M`;

    const { name, year, rating, description, image } = formData;

    const submittedData = {
      name,
      releaseDate: year,
      rating,
      description,
      duration: combinedDuration,
      image,
    };

    mutation.mutate(submittedData);
    console.log(submittedData, "submot");
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
        name="name"
        value={formData.name}
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

      <Box container spacing={2} alignItems="center">
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            flexDirection: "column",
            border: "1px solid #484553",
            marginTop: "2px",
            padding: "3px",
            color: "gray",
          }}
        >
          <Typography variant="body2">Duration*</Typography>

          <Grid
            item
            display={"flex"}
            sx={{ paddingBottom: "12px", paddingX: "12px" }}
            gap={2}
          >
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
        </Box>
      </Box>
      <Box container gap={2} display={"flex"} justifyContent={"flex-end"}>
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
      </Box>

      <TextField
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
        type="text"
        required
        fullWidth
        margin="normal"
        helperText="Enter a valid image URL"
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
