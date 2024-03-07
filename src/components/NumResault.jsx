const NumResault = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong> {movies.length} </strong>resaults
    </p>
  );
};

export default NumResault;
