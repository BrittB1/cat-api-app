import pawButton from "../assets/images/paw-button.png";

// Displays one cat and handles its favorite button.
function Card({ cat, isFavorite, onToggleFavorite }) {
// Get the breed name from the API data.
// If the API doesn't provide a breed, display "Unknown breed".
const breedName = cat.breeds?.[0]?.name ?? "Unknown breed";

return (
<article className="card">
{/* Displays the cat image from the API. */}
<img src={cat.url} alt="A cat" loading="lazy" />

  {/* Displays the cat's breed name. */}
  <p className="breed">{breedName}</p>

  {/* 
    The favorite button uses props to add or remove this cat
    from the user's favorites.
    
    The isFavorite prop determines which state the button is in,
    while onToggleFavorite handles the click.
  */}
  <button
    type="button"
    className={`fav-button ${isFavorite ? "is-favorite" : ""}`}
    onClick={() => onToggleFavorite(cat)}
    aria-label={
      isFavorite ? "Remove from favorites" : "Add to favorites"
    }
  >
    {/* Paw image replaces the previous heart icon. */}
    <img src={pawButton} alt="" />
  </button>
</article>

);
}

export default Card;