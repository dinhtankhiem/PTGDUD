import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FilterSidebar from "../components/common/FilterSidebar";
import RecipeCard from "../components/common/RecipeCard";
import Pagination from "../components/common/Pagination";
import { recipes } from "../data/recipes";

function SearchResultsPage() {
  return (
    <>
      <Header loggedIn />
      <main className="container page-space split-layout">
        <FilterSidebar />
        <section className="content-panel"><div className="content-head"><h1>Salad (32)</h1><select><option>A-Z</option></select></div><div className="grid-3">{recipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}</div><Pagination /></section>
      </main>
      <Footer />
    </>
  );
}

export default SearchResultsPage;
