import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProfileHeader from "../components/recipeBox/ProfileHeader";
import RecipeCard from "../components/common/RecipeCard";
import Pagination from "../components/common/Pagination";
import { profile } from "../data/profile";
import { recipes } from "../data/recipes";

function RecipeBoxPage() {
  return (
    <>
      <Header loggedIn />
      <main className="container page-space"><ProfileHeader profile={profile} /><div className="tabs"><button className="active">Saved Recipes</button><button>Folders</button><button>Recipes by Genevieve</button></div><div className="grid-3">{recipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}</div><Pagination /></main>
      <Footer />
    </>
  );
}

export default RecipeBoxPage;
