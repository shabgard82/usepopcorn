import React, { useState } from "react";

const ListBox = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="main">
      <div className="box">
        <button className="btn-toggle" onClick={(open) => setIsOpen(!open)}>
          {isOpen ? "-" : "+"}
        </button>
        {isOpen && (
          <ul className="list">
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default ListBox;
