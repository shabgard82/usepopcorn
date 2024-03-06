import { WatchedMovie } from "./WatchedMovie";

export const WatchedList = ({ watchMovies }) => {
  return (
    <div>
      <ul className="list">
        {watchMovies.map((movie) => (
          <WatchedMovie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
};


