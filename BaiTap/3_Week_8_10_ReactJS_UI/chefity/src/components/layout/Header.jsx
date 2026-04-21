import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar";

function Header({ loggedIn = false }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">Chefify</Link>
        <SearchBar placeholder="What would you like to cook?" />
        <nav className="menu">
          <a href="#">What to cook</a><a href="#">Recipes</a><a href="#">Ingredients</a><a href="#">Occasions</a><a href="#">About Us</a>
        </nav>
        <div className="header-actions">
          {loggedIn ? <><Link className="btn btn-soft" to="/recipe-box">Your Recipe Box</Link><span className="avatar-dot">E</span></> : <><button className="btn btn-soft">Login</button><Link className="btn btn-primary" to="/subscribe">Subscribe</Link></>}
        </div>
      </div>
    </header>
  );
}

export default Header;
