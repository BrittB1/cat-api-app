// This page handles loading and displaying random cats from the Cat API.

import { useState, useEffect, useRef } from "react";
import {
  getRandomCats,
  searchBreeds,
  getImagesByBreed,
} from "../services/api.js";
import Gallery from "../components/Gallery.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Explorer({ favorites, onToggleFavorite }) {
  // Stores the cats returned from the API.
  const [cats, setCats] = useState([]);

  // Stores loading and error messages.
  const [status, setStatus] = useState("");

  // Keeps track of whether the initial API request has already happened.
  const hasLoaded = useRef(false);

  // Requests a new set of random cats from the API.
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

  // Searches for cats by breed.
  async function handleSearch(query) {
    setStatus("Searching...");

    try {
      // Find the breed that matches the user's search.
      const breeds = await searchBreeds(query);

      if (breeds.length === 0) {
        setCats([]);
        setStatus("No breed found. Try another search.");
        return;
      }

      // Use the matching breed's ID to get cats from that breed.
      const breedId = breeds[0].id;
      const data = await getImagesByBreed(breedId, 9);

      setCats(data);
      setStatus("");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong with the search.");
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
    <main>
      <header className="app-header">
        <h1>Explore Cats</h1>
        <p className="tagline">Find your next favorite feline!</p>
      </header>

      {/* SearchBar lets the user search for a cat breed. */}
      <section className="search-row">
        <SearchBar onSearch={handleSearch} />
      </section>

      {/* Button lets the user request a fresh set of random cats. */}
      <section className="controls">
        <button
          type="button"
          className="button"
          onClick={loadRandomCats}
        >
          Get some Cats!
        </button>
      </section>

      {/* Displays loading or error messages when needed. */}
      <p className="status">{status}</p>

      {/* Passes the cats and favorite information to the Gallery. */}
      <Gallery
        cats={cats}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}

export default Explorer;