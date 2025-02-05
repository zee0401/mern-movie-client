import React from "react";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  return <div>Search the movie</div>;
};

export default Search;
