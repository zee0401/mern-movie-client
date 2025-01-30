import React from "react";
import { InputBase, Box, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

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

const SearchBox = ({ setSearchInput }) => {
  return (
    <StyledBox>
      <InputBase
        placeholder="Seach by movies name or description..."
        style={{ width: "100%", marginLeft: "20px" }}
        // onChange={(e) => {
        //   setSearchInput(e.target.value);
        // }}
      />
      <SearchInput>
        <SearchIcon />
      </SearchInput>
    </StyledBox>
  );
};

export default SearchBox;
