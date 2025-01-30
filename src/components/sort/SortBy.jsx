import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SortByDropdown = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState("rating");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200, marginBottom: 2, height: "40px" }}>
      <FormControl fullWidth size="small">
        <InputLabel id="sort-by-label" sx={{ color: "white" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortOption}
          label="Sort By"
          onChange={handleSortChange}
          defaultValue="rating"
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
