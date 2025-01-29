import { Box, Stack } from "@mui/material";
import Movies from "../components/Movies/Movies";
import SearchBox from "../components/Search/SearchBox";
import SortByDropdown from "../components/sort/SortBy";

const Home = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        width="100%"
        sx={{ marginBottom: "1rem" }}
      >
        <SearchBox style={{ width: "100%" }} />

        <SortByDropdown style={{ width: "100%" }} />
      </Stack>
      <Movies />
    </div>
  );
};

export default Home;
