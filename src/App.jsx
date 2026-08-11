import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Explorer from "./pages/Explorer.jsx";
import Favorites from "./pages/Favorites.jsx";
import { addFavorite, removeFavorite, getFavorites } from "./services/favorites.js";

function App() {
  // Each favorite is { favouriteId, imageId, url }.
  const [favorites, setFavorites] = useState([]);

  // Load already-saved favorites once, on startup.
  useEffect(() => {
    async function loadFavorites() {
      try {
        const records = await getFavorites();
        const mapped = records.map((fav) => ({
          favouriteId: fav.id,
          imageId: fav.image_id,
          url: fav.image.url,
        }));
        setFavorites(mapped);
      } catch (error) {
        console.error("Couldn't load favorites:", error);
      }
    }
    loadFavorites();
  }, []);

  // Add or remove a cat depending on whether it's already saved.
  async function toggleFavorite(cat) {
    const existing = favorites.find((fav) => fav.imageId === cat.id);
    try {
      if (existing) {
        await removeFavorite(existing.favouriteId);
        setFavorites((prev) => prev.filter((fav) => fav.imageId !== cat.id));
      } else {
        const result = await addFavorite(cat.id);
        setFavorites((prev) => [
          ...prev,
          { favouriteId: result.id, imageId: cat.id, url: cat.url },
        ]);
      }
    } catch (error) {
      console.error("Couldn't update favorite:", error);
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/explore"
          element={<Explorer favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </>
  );
}

export default App;