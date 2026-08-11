import Gallery from "../components/Gallery.jsx";

// Displays the user's saved cats.
function Favorites({ favorites, onToggleFavorite }) {
  // Convert the saved favorite data into the format
  // expected by the Gallery component.
  const favoriteCats = favorites.map((fav) => ({
    id: fav.imageId,
    url: fav.url,
    breeds: fav.breeds ?? [],
  }));

  return (
    <main>
      <header className="app-header">
        <h1>Favorite Cats</h1>
      </header>

      {/* Conditionally displays a message when there are no saved cats. */}
      {favoriteCats.length === 0 ? (
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