import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><h4>About Us</h4><p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p><div className="email-box"><input placeholder="Enter your email" /><button>Send</button></div></div>
        <div><h4>Learn More</h4><Link to="/recipe-box">Our Cooks</Link><Link to="/search">See Our Features</Link><Link to="/search-empty">FAQ</Link></div>
        <div><h4>Shop</h4><Link to="/subscribe">Gift Subscription</Link><Link to="/subscribe">Send Us Feedback</Link></div>
        <div><h4>Recipes</h4><Link to="/search">What to Cook This Week</Link><Link to="/search">Pasta</Link><Link to="/search">Dinner</Link><Link to="/search">Healthy</Link></div>
      </div>
      <div className="container footer-bottom"><Link to="/" className="logo">Chefify</Link><span>2026 Chefify Company</span><span>Terms of Service | Privacy Policy</span></div>
    </footer>
  );
}

export default Footer;
