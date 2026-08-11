import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Explorer from "./pages/Explorer.jsx";
import Favorites from "./pages/Favorites.jsx";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "./services/favorites.js";
import { getImageById } from "./services/api.js";

function App() {
  // Stores the user's favorite cats.
  const [favorites, setFavorites] = useState([]);

  // Loads saved favorites when the application starts.
  useEffect(() => {
    async function loadFavorites() {
      try {
        const records = await getFavorites();

        // Get the full image information for each favorite.
        const mapped = await Promise.all(
          records.map(async (fav) => {
            const image = await getImageById(fav.image_id);

            return {
              favoriteId: fav.id,
              imageId: fav.image_id,
              url: image.url,
              breeds: image.breeds ?? [],
            };
          })
        );

        setFavorites(mapped);
      } catch (error) {
        console.error("Couldn't load favorites...", error);
      }
    }

    loadFavorites();
  }, []);

  // Adds or removes a cat from the user's favorites.
  async function toggleFavorite(cat) {
    const existing = favorites.find(
      (favorite) => favorite.imageId === cat.id
    );

    try {
      if (existing) {
        // Remove the favorite from the API.
        await removeFavorite(existing.favoriteId);

        // Remove the cat from the local favorites.
        setFavorites((prev) =>
          prev.filter((favorite) => favorite.imageId !== cat.id)
        );
      } else {
        // Add the cat to the API favorites.
        const result = await addFavorite(cat.id);

        // Add the new favorite to the existing favorites.
        setFavorites((prev) => [
          ...prev,
          {
            favoriteId: result.id,
            imageId: cat.id,
            url: cat.url,
            breeds: cat.breeds ?? [],
          },
        ]);
      }
    } catch (error) {
      console.error("Whoops! Couldn't update favorites:", error);
    }
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/explore"
          element={
            <Explorer
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;