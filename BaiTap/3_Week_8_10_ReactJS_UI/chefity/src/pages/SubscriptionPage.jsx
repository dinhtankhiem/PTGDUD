import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PricingCard from "../components/subscription/PricingCard";
import { images, fallbackImage } from "../config/imagePaths";

function SubscriptionPage() {
  return (
    <>
      <Header />
      <main className="container page-space"><section className="subscribe-top"><div><h1>Get full access to every tasty recipe in Chefify</h1><ul><li>Unlimited recipe access</li><li>Step-by-step visual instructions</li><li>Personal recipe box and notes</li></ul><p className="price">0.25 USD / Week</p><button className="btn btn-primary">Subscribe Now</button><p>Cancel or Pause anytime</p></div><img src={images.subscribeFood} alt="Subscribe" onError={(e) => (e.currentTarget.src = fallbackImage)} /></section><section><h2>An All Access subscription includes</h2><div className="benefits-grid"><article>Ad-free experience</article><article>Premium recipes</article><article>Weekly collections</article><article>Early feature access</article></div></section><PricingCard /></main>
      <Footer />
    </>
  );
}

export default SubscriptionPage;
