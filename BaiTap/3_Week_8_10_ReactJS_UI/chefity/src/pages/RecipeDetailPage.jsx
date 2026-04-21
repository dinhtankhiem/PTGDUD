import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import RecipeMeta from "../components/recipe/RecipeMeta";
import IngredientPanel from "../components/recipe/IngredientPanel";
import StepBlock from "../components/recipe/StepBlock";
import CommentItem from "../components/recipe/CommentItem";
import RecipeCard from "../components/common/RecipeCard";
import { comments } from "../data/comments";
import { recipes } from "../data/recipes";
import { images, fallbackImage } from "../config/imagePaths";

function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = useMemo(() => recipes.find((item) => item.id === id) || recipes[0], [id]);
  const steps = [
    { number: 1, text: "Prepare all vegetables and set up your dressing bowl." },
    { number: 2, text: "Mix ingredients and season gently to keep texture." },
    { number: 3, text: "Serve immediately and garnish with basil." }
  ];

  return (
    <>
      <Header loggedIn />
      <main className="container page-space"><p className="breadcrumb">Home / Recipe / {recipe.title}</p><section className="recipe-detail"><div><h1>{recipe.title}</h1><p>Fresh and easy recipe for daily healthy meals with minimal ingredients.</p><RecipeMeta /><IngredientPanel /></div><div><img className="detail-image" src={images.recipeDetail} alt="Recipe detail" onError={(e) => (e.currentTarget.src = fallbackImage)} />{steps.map((step) => <StepBlock key={step.number} step={step} />)}</div></section><section className="notes"><h3>Cooking note</h3><textarea placeholder="Write your private note here..." /></section><section><div className="tabs"><button className="active">All Comments</button><button>Latest</button><button>Popular</button></div>{comments.map((item) => <CommentItem key={item.id} item={item} />)}</section><section><h3>Recently viewed</h3><div className="grid-3">{recipes.slice(0, 3).map((r) => <RecipeCard key={r.id} recipe={r} />)}</div></section></main>
      <Footer />
    </>
  );
}

export default RecipeDetailPage;
