import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Movies = () => {
  const theme = useTheme();
  // Use media query to dynamically adjust columns based on screen size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Determine number of columns based on screen size
  const cols = isSmallScreen ? 2 : isMediumScreen ? 3 : 5;

  return (
    <ImageList cols={cols} gap={12} rowHeight={300} sx={{ overflow: "hidden" }}>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>

      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
      <ImageListItem>
        <img src="https://www.omdbapi.com/src/poster.jpg" alt="img" />
        <ImageListItemBar title="Batman Begins" subtitle={<span>2005</span>} />
      </ImageListItem>
    </ImageList>
  );
};

export default Movies;
