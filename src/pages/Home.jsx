import { Box } from "@mui/material";
import Movies from "../components/Movies/Movies";
import SearchBox from "../components/Search/SearchBox";
import SortByDropdown from "../components/sort/SortBy";

const Home = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SearchBox />
        <SortByDropdown />
      </Box>
      <Movies />
    </div>
  );
};

export default Home;
