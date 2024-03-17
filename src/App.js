import "./index.css";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import { useState } from "react";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResault from "./components/NumResault";
import { MovieList } from "./components/MovieList";
import { WatchedList } from "./components/WatchedList";
import { Summary } from "./components/Summary";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import MovieDetail from "./components/MovieDetail";
import { useMovies } from "./components/custom-hook/useMovies";
import { useLocalStorage } from "./components/custom-hook/useLocalStorage";

export default function App() {
  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] = useState(null);

  const [watchMovies, setWatchMovies] = useLocalStorage([], "watchMovies");

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

  const { movies, error, isLoading } = useMovies(query);

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
