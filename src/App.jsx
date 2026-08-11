import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Explorer from "./pages/Explorer.jsx";
import Favorites from "./pages/Favorites.jsx";
import { addFavorite, removeFavorite, getFavorites} from "./services/favorites.js";

function App() {
const [favorite,setFavorites] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const records = await getFavorites();
        const mapped = records.map((fav) => ({
          favoriteId: fav.id,
          imageId: fav.image_id,
          url: fav.image.url,
        }));
        setFavorites(mapped);
    } catch (error) {
      console.error ("Couldn't load favorites...",error);
    }
  }
  loadFavorites();
},[]);

  try {
    if (existing) {
      await removeFavorite(existing.favoriteId);
      setFavorites((prev) => prev, filter((fav) => fav.imageId !== cat.id));
    } else {
      const result = await addFavorite(cat.id);
      setFavorites((prev) => [
        { favoriteId: result.id, imageId: cat.id, url: cat.url },
      ]);
    }
  } catch (error) {
    console.error("Whoops! Couldn't update favorites:", error);
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explorer />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;