// Displays the user's saved cats
function Favorites() {
  const favorites = [];

  return (
    <main className="favorites">
      <h1>Favorite Cats</h1>

      {/* Conditionally displays a message when there are no saved cats */}
      {favorites.length === 0 ? (
        <p>You don't have any favorite cats yet.</p>
      ) : (
        <p>Your favorite felines will appear here.</p>
      )}
    </main>
  );
}

export default Favorites;