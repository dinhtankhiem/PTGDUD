import { filters } from "../../data/filters";

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <h3>FILTERS</h3>
      <div><h4>Type</h4>{filters.types.map((type) => <label key={type}><input type="checkbox" /> {type}</label>)}</div>
      <div><h4>Time</h4><input type="range" /><input type="range" /></div>
      <div><h4>Rating</h4>{filters.ratings.map((rating) => <label key={rating}><input type="checkbox" /> {"?".repeat(rating)}</label>)}</div>
      <button className="btn btn-primary">Apply</button>
    </aside>
  );
}

export default FilterSidebar;
