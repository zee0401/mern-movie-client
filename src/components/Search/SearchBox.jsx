import React from "react";
import { InputBase, Box, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const StyledBox = styled(Box)`
  background: #0c0101;
  width: 100%;
  margin-left: 10px;
  display: flex;
  margin-bottom: 2%;
  border: 1px solid #4c4c4c;
  border-radius: 4px;
  margin-right: 20px;
`;

const SearchInput = styled(Box)`
  color: gray;
  justify-content: center;
  padding-right: 5px;
  padding-top: 10px;

  &:hover {
    cursor: pointer;
  }
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
