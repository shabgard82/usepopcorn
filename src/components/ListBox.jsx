import React, { useState } from "react";
import { MovieList } from "./MovieList";

const ListBox = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="main">
      <div className="box">
        <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </button>
        {isOpen && <MovieList movies={movies} />}
      </div>
    </main>
  );
};

export default ListBox;
