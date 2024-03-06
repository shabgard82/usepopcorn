const NumResault = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong> {movies.movies.length} </strong>resaults
    </p>
  );
};

export default NumResault;
