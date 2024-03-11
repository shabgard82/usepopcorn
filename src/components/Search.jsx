const Search = ({ query, setQuery }) => {
  return (
    <input
      className="search"
      placeholder="search movies ..."
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
