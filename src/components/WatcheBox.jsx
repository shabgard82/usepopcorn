import { useState } from "react";
import { Summary } from "./Summary";
import { WatchedList } from "./WatchedList";

const WatcheBox = ({ tempWatchedData }) => {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watchMovies, setWatchMovies] = useState(tempWatchedData);

  return (
    <main className="main">
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <Summary watchMovies={watchMovies} />
            <WatchedList watchMovies={watchMovies} />
          </>
        )}
      </div>
    </main>
  );
};

export default WatcheBox;
