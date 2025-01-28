import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SortByDropdown = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSortChange(event.target.value); // Notify parent component about the selected sort option
  };

  return (
    <Box sx={{ minWidth: 200, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortOption}
          label="Sort By"
          onChange={handleSortChange}
        >
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="releaseDate">Release Date</MenuItem>
          <MenuItem value="duration">Duration</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
