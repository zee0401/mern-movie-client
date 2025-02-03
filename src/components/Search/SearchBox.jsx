import React from "react";
import { InputBase, Box, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginLeft: "10px",
  display: "flex",
  marginBottom: "2%",
  border: "1px solid #4c4c4c",
  borderRadius: "4px",
  marginRight: "20px",
}));

const SearchInput = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  justifyContent: "center",
  paddingRight: "5px",
  paddingTop: "10px",

  "&:hover": {
    cursor: "pointer",
  },
}));

const SearchBox = ({ searchTerm, onSearchChange, onSearchClick }) => {
  return (
    <StyledBox>
      <InputBase
        placeholder="Seach by movies name or description..."
        style={{ width: "100%", marginLeft: "20px" }}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
        value={searchTerm}
      />
      <SearchInput onClick={onSearchClick}>
        <SearchIcon />
      </SearchInput>
    </StyledBox>
  );
};

export default SearchBox;
