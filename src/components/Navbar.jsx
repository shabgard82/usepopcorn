import Logo from "./Logo";
import NumResault from "./NumResault";
import Search from "./Search";

const Navbar = (movies) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResault movies={movies} />
    </nav>
  );
};

export default Navbar;
