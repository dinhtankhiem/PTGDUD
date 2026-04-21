import { images, fallbackImage } from "../../config/imagePaths";
import { Link } from "react-router-dom";

function HeroSection() {
  return <section className="hero"><img src={images.heroBanner} alt="Hero banner" onError={(e)=>(e.currentTarget.src=fallbackImage)} /><div className="hero-card"><small>Recipe of the day</small><h1>Salad Caprese</h1><p>Classic Italian salad with ripe tomatoes, mozzarella and fresh basil.</p><div className="author">Emma Gonzalez</div><Link to="/recipe/1" className="btn btn-primary">View now</Link></div></section>;
}
export default HeroSection;
