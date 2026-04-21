function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><h4>About Us</h4><p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p><div className="email-box"><input placeholder="Enter your email" /><button>Send</button></div></div>
        <div><h4>Learn More</h4><a href="#">Our Cooks</a><a href="#">See Our Features</a><a href="#">FAQ</a></div>
        <div><h4>Shop</h4><a href="#">Gift Subscription</a><a href="#">Send Us Feedback</a></div>
        <div><h4>Recipes</h4><a href="#">What to Cook This Week</a><a href="#">Pasta</a><a href="#">Dinner</a><a href="#">Healthy</a></div>
      </div>
      <div className="container footer-bottom"><span className="logo">Chefify</span><span>2026 Chefify Company</span><span>Terms of Service | Privacy Policy</span></div>
    </footer>
  );
}

export default Footer;
