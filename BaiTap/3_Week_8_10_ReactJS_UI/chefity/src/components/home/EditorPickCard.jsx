import { fallbackImage } from "../../config/imagePaths";
import { Link } from "react-router-dom";

function EditorPickCard({ item }) {
  return <article className="editor-card"><img src={item.image} alt={item.title} onError={(e)=>(e.currentTarget.src=fallbackImage)} /><div><h3><Link to={`/recipe/${item.id}`}>{item.title}</Link></h3><p>{item.description}</p><small>{item.author}</small></div></article>;
}
export default EditorPickCard;
