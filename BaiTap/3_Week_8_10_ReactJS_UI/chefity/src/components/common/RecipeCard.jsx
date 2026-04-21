import { Link } from "react-router-dom";
import { fallbackImage } from "../../config/imagePaths";

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} onError={(e) => (e.currentTarget.src = fallbackImage)} />
      <button className="bookmark">?</button>
      <div className="recipe-card-body"><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link><p>{recipe.time}</p></div>
    </article>
  );
}

export default RecipeCard;
