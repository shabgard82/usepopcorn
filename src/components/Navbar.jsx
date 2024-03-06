import Logo from "./Logo";
import NumResault from "./NumResault";
import Search from "./Search";

const Navbar = (movies) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResault />
    </nav>
  );
};

export default Navbar;
