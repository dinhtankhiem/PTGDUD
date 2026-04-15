import chefifyLogo from '../assets/Lab1a/chefify-logo.png'

const NAV_LINKS = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us']

const Navbar = ({ onLoginOpen }) => (
  <header className="navbar">
    <div className="navbarLeft">
      <img src={chefifyLogo} alt="Chefify logo" className="logo" />
      <div className="searchWrapper">
        <input
          type="search"
          className="searchInput"
          placeholder="What would you like to cook?"
          aria-label="Search"
        />
      </div>
    </div>

    <nav>
      <ul className="navLinks">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#" className="navLink">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <div className="navActions">
      <button type="button" className="textButton" onClick={onLoginOpen}>
        Login
      </button>
      <button type="button" className="primaryButton">
        Subscribe
      </button>
    </div>
  </header>
)

export default Navbar
