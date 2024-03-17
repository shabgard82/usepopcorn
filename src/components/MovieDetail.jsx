import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { Loader } from "./Loader";
import { useKey } from "./custom-hook/useKey";

const key = "51fe1286";
const MovieDetail = ({
  selectedId,
  handleCloseIcon,
  handleAddMovie,
  watchMovies,
}) => {
  const [userRating, setUserRating] = useState("");
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const isWatch = watchMovies.map((movie) => movie.imdbID).includes(selectedId);
  const watchUserRating = watchMovies.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const handleAddToList = () => {
    const newMovies = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    handleAddMovie(newMovies);
    handleCloseIcon();
  };

  useEffect(
    function () {
      async function getMoviesDetail() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMoviesDetail();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movies - ${title}`;
      return function () {
        document.title = "Night Movies";
      };
    },
    [title]
  );
  useKey("escape", handleCloseIcon);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleCloseIcon}>
              <i
                class="fa fa-arrow-left"
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "900px",
                }}
              >
                &larr;
              </i>
            </button>
            <img src={poster} alt={`poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released}&bull;{runtime}
              </p>
              <p>{genre}</p>

              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatch ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddToList}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie {watchUserRating}
                  <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>star rating {actors}</p>
            <p>direct by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
