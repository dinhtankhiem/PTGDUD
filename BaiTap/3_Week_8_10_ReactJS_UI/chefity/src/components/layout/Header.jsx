import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar";

function Header({ loggedIn = false }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">Chefify</Link>
        <SearchBar placeholder="What would you like to cook?" />
        <nav className="menu">
          <Link to="/search">What to cook</Link>
          <Link to="/search">Recipes</Link>
          <Link to="/search">Ingredients</Link>
          <Link to="/search-empty">Occasions</Link>
          <Link to="/subscribe">About Us</Link>
        </nav>
        <div className="header-actions">
          {loggedIn ? (
            <>
              <Link className="btn btn-soft" to="/recipe-box">
                Your Recipe Box
              </Link>
              <span className="avatar-dot">E</span>
            </>
          ) : (
            <>
              <Link className="btn btn-soft" to="/search">
                Login
              </Link>
              <Link className="btn btn-primary" to="/subscribe">
                Subscribe
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
