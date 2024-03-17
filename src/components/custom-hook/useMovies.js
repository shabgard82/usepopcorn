import { useEffect, useState } from "react";

const key = "51fe1286";
export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
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

      FetchMovies();
    },
    [query]
  );
  return { movies, error, isLoading };
};
