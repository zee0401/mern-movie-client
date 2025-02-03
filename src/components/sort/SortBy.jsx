import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";

const SortByDropdown = ({ sortBy, setSortBy, searchTerm = "" }) => {
  const navigate = useNavigate();

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    console.log("newSortBy", newSortBy);
    setSortBy(newSortBy);
    navigate(`/search-movies?search=${searchTerm}&sortBy=${newSortBy}`);
  };

  return (
    <Box sx={{ minWidth: 200, marginBottom: 2, height: "40px" }}>
      <FormControl fullWidth size="small">
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortBy}
          label="Sort By"
          onChange={handleSortChange}
          sx={{ color: "white" }}
        >
          <MenuItem value="rating" defaultChecked>
            Rating
          </MenuItem>
          <MenuItem value="releaseDate">Release Date</MenuItem>
          <MenuItem value="duration">Duration</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
