import ListBox from "./ListBox";
import WatcheBox from "./WatcheBox";

const Main = ({ movies,tempWatchedData }) => {
  return (
    <div className="main">
      <ListBox movies={movies} />
      <WatcheBox tempWatchedData={tempWatchedData}/>
    </div>
  );
};

export default Main;
