/* eslint-disable react/prop-types */
import { Card, CardActionArea, CardMedia } from "@mui/material";

const MoviesImageCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 200, borderRadius: 3, borderBottom: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={movie.name}
          height="300"
          image={movie.image}
          title={movie.name}
          loading="lazy"
        />
      </CardActionArea>
    </Card>
  );
};

export default MoviesImageCard;
