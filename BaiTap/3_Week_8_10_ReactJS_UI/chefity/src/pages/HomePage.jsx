import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../components/home/SectionTitle";
import RecipeCard from "../components/common/RecipeCard";
import EditorPickCard from "../components/home/EditorPickCard";
import DiscoverModal from "../components/common/DiscoverModal";
import LoginModal from "../components/common/LoginModal";
import { editorPicks, recipes } from "../data/recipes";

function HomePage() {
  const [discoverOpen, setDiscoverOpen] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="container page-space">
        <HeroSection />
        <SectionTitle title="This Summer Recipes" />
        <section className="grid-3">{recipes.slice(0, 3).map((r) => <RecipeCard key={r.id} recipe={r} />)}</section>
        <SectionTitle title="Recipes With Videos" />
        <section className="grid-3">{recipes.slice(3, 6).map((r) => <RecipeCard key={r.id} recipe={r} />)}</section>
        <SectionTitle title="Editor's pick" />
        <section className="editor-grid">{editorPicks.map((r) => <EditorPickCard key={r.id} item={r} />)}</section>
        <div className="row-gap"><button className="btn btn-soft" onClick={() => setLoginOpen(true)}>Open Login Modal</button><button className="btn btn-soft" onClick={() => setDiscoverOpen(true)}>Open Discover Modal</button></div>
      </main>
      <Footer />
      <DiscoverModal open={discoverOpen} onClose={() => setDiscoverOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default HomePage;
