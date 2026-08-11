import Gallery from "../components/Gallery";

// Displays the user's saved cats
function Favorites({ favorites, onToggleFavorite }) {

  const favoriteCats = favorites.map((fav) => ({
    id: fav.imageId,
    url: fav.url,
  }));

  return (
    <main className="favorites">
      <h1>Favorite Cats</h1>

      {/* Conditionally displays a message when there are no saved cats */}
      {favorites.length === 0 ? (
        <p>You don't have any favorite cats yet.</p>
      ) : (
        <Gallery
          cats={favoriteCats}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </main>
  );
}
export default Favorites;