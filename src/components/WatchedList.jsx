import { WatchedMovie } from "./WatchedMovie";

export const WatchedList = ({ watchMovies, onDeleteWatch }) => {
  return (
    <div>
      <ul className="list">
        {watchMovies.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatch={onDeleteWatch}
          />
        ))}
      </ul>
    </div>
  );
};
