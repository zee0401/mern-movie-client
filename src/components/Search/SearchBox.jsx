import React, { useState } from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useSearchParams } from "react-router-dom";

const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  border: "1px solid #4c4c4c",
  borderRadius: "4px",
  marginBottom: "2%",
});

const SearchInput = styled(Box)({
  paddingRight: "10px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = () => {
    setSearchParams({ search: searchTerm });
    navigate(`?search=${searchTerm}`);
  };

  return (
    <StyledBox>
      <InputBase
        placeholder="Search by movie name or description..."
        style={{ flex: 1, padding: "4px" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <SearchInput onClick={handleSearch}>
        <SearchIcon />
      </SearchInput>
    </StyledBox>
  );
};

export default SearchBox;
