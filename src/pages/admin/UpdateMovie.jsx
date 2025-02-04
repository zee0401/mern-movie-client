import { useParams } from "react-router-dom";
import MovieForm from "../../components/Movies/MovieForm";
import { useQuery } from "@tanstack/react-query";
import { singleMovie } from "../../api/moviesApi";

const UpdateMovie = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [id],
    queryFn: () => singleMovie(id),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.movie) {
    return <div>Error: Movie not found or invalid ID</div>;
  }
  console.log(data, "data");
  return (
    <div>
      <MovieForm moviebyId={data?.movie} id={id} />
    </div>
  );
};

export default UpdateMovie;
