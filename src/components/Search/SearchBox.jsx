import React from "react";
import { InputBase, Box, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
const StyledBox = styled(Box)`
  background: #0c0101;
  margin-left: 10px;
  display: flex;
  margin-bottom: 2%;
  border: 1px solid #f3f2f2;
`;
const SearchInput = styled(Box)`
  border-radius: 10px solid #f3f2f2;
  color: gray;
  justify-content: center;
  padding-right: 5px;
  padding-top: 4px;
`;
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
