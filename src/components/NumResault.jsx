const NumResault = ({ movies }) => {
  console.log(movies);
  console.log(movies.length);
  return (
    <p className="num-results">
      Found <strong> {movies.movies.length} </strong>resaults
    </p>
  );
};

export default NumResault;
