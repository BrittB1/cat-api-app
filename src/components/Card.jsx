// Displays one cat and handles its favorite button
function Card({ cat, isFavorite, onToggleFavorite }) {
  // Get the breed name from the API data
  const breedName = cat.breeds?.[0]?.name ?? "Unknown breed";

  return (
    <article className="card">
      <img src={cat.url} alt="A cat" loading="lazy" />

      <p className="breed">{breedName}</p>

      {/* Button uses props to add or remove this cat from favorites */}
      <button
        type="button"
        className={`fav-button ${isFavorite ? "is-favorite" : ""}`}
        onClick={() => onToggleFavorite(cat)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        ♥
      </button>
    </article>
  );
}

export default Card;