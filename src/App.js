import "./index.css";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResault from "./components/NumResault";
import { MovieList } from "./components/MovieList";
import { WatchedList } from "./components/WatchedList";
import { Summary } from "./components/Summary";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import MovieDetail from "./components/MovieDetail";

const key = "51fe1286";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  // const [watchMovies, setWatchMovies] = useState([]);
  const [watchMovies, setWatchMovies] = useState(function () {
    const storedValue = localStorage.getItem("watchMovies");
    return JSON.parse(storedValue);
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // save data in local storage
  useEffect(
    function () {
      localStorage.setItem("watchMovies", JSON.stringify(watchMovies));
    },
    [watchMovies]
  );

  const handleClickMovies = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseIcon = () => {
    setSelectedId(null);
  };

  const handleAddMovie = (movie) => {
    setWatchMovies((watchMovies) => [...watchMovies, movie]);
  };

  const handleRemoveMovie = (id) => {
    setWatchMovies((watchMovies) =>
      watchMovies.filter((movie) => movie.imdbID !== id)
    );
  };

  useEffect(
    function () {
      async function FetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`
          );
          if (!res.ok)
            throw new Error("something went wrong whith fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("movie not found");
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseIcon();
      FetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResault movies={movies} />
      </Navbar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} handleClickMovies={handleClickMovies} />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <MovieDetail
              watchMovies={watchMovies}
              handleAddMovie={handleAddMovie}
              selectedId={selectedId}
              handleCloseIcon={handleCloseIcon}
            />
          ) : (
            <>
              <Summary watchMovies={watchMovies} />
              <WatchedList
                watchMovies={watchMovies}
                onDeleteWatch={handleRemoveMovie}
              />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}
