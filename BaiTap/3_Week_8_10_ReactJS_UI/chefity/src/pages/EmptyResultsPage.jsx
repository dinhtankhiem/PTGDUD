import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FilterSidebar from "../components/common/FilterSidebar";
import TagChip from "../components/common/TagChip";
import { filters } from "../data/filters";
import { images, fallbackImage } from "../config/imagePaths";

function EmptyResultsPage() {
  return (
    <>
      <Header loggedIn />
      <main className="container page-space split-layout">
        <FilterSidebar />
        <section className="content-panel empty"><h1>Sorry, no results were found for "cakescascsa"</h1><img src={images.searchEmpty} alt="No result" onError={(e) => (e.currentTarget.src = fallbackImage)} /><p>We have all your Independence Day sweets covered.</p><div className="chip-row">{filters.tags.map((tag) => <TagChip key={tag} label={tag} />)}</div></section>
      </main>
      <Footer />
    </>
  );
}

export default EmptyResultsPage;
