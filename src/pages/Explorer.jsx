// This page handles loading and displaying random cats from the Cat API

import { useState, useEffect, useRef } from "react";
import { getRandomCats } from "../services/api.js";
import Gallery from "../components/Gallery.jsx";

function Explorer({favorites, onToggleFavorite}) {
  // Stores the cats returned from the API
  const [cats, setCats] = useState([]);

  // Stores loading and error messages
  const [status, setStatus] = useState("");

  // Keeps track of whether the initial API request has already happened.
  // useRef stores a value without causing the component to re-render.
  const hasLoaded = useRef(false);

  // Requests a new set of random cats from the API
  async function loadRandomCats() {
    setStatus("Loading cats...");

    try {
      const data = await getRandomCats(9);
      setCats(data);
      setStatus("");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong loading cats. Please try again.");
    }
  }

  // Runs when the Explorer page first loads.
  // The ref prevents the initial request from running twice
  // during React StrictMode's development checks.
  useEffect(() => {
    if (hasLoaded.current) return;

    hasLoaded.current = true;
    loadRandomCats();
  }, []);

  return (
    <main className="panel">
      <h1>Explore Cats</h1>
      <p>Find your next favorite feline!</p>

      {/* Button lets the user request a fresh set of random cats */}
      <section className="controls">
        <button type="button" className="button" onClick={loadRandomCats}>
          Get some Cats!
        </button>
      </section>

      {/* Displays loading or error messages when needed */}
      <p className="status">{status}</p>

      {/* Passes the cats from Explorer to the Gallery component */}
      <Gallery cats={cats} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </main>
  );
}

export default Explorer;