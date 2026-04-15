const PaginationDots = ({ count, activeIndex }) => (
  <div className="paginationDots">
    {Array.from({ length: count }).map((_, index) => (
      <span
        key={index}
        className={`dot ${index === activeIndex ? 'active' : ''}`}
        aria-hidden="true"
      />
    ))}
  </div>
)

export default PaginationDots
