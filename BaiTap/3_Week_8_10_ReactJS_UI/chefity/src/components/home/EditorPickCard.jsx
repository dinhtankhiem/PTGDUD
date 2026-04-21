import { fallbackImage } from "../../config/imagePaths";

function EditorPickCard({ item }) {
  return <article className="editor-card"><img src={item.image} alt={item.title} onError={(e)=>(e.currentTarget.src=fallbackImage)} /><div><h3>{item.title}</h3><p>{item.description}</p><small>{item.author}</small></div></article>;
}
export default EditorPickCard;
