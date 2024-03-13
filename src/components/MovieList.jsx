import { Movie } from "./Movie";

export const MovieList = ({ movies, handleClickMovies }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} handleClickMovies={handleClickMovies} />
      ))}
    </ul>
  );
};
