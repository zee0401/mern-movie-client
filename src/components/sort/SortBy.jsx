import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

const SortByDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get current search and sortBy values from the URL
  const searchTerm = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "rating";

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSearchParams({ search: searchTerm, sortBy: newSortBy });
    navigate(`?search=${searchTerm}&sortBy=${newSortBy}`);
  };

  return (
    <Box sx={{ minWidth: 200, marginBottom: 2 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sortBy}
          onChange={handleSortChange}
          sx={{ color: "white" }}
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
