import { useRef } from "react";
import { useKey } from "./custom-hook/useKey";

const Search = ({ query, setQuery }) => {
  const inputElement = useRef(null);
  useKey("enter", function () {
    if (document.addEventListener === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });
  return (
    <input
      className="search"
      placeholder="search movies ..."
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
};

export default Search;
