import React, { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const CreateMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    rating: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Data Submitted:", formData);
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
        Create a Movie
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

      <TextField
        label="Duration (in minutes)"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        type="number"
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
        Submit
      </Button>
    </Box>
  );
};

export default CreateMovieForm;
