//This will contain the cat API functionality 

import { useState, useEffect } from "react";
import { getRandomCats } from "../services/api.js";
import Gallery from "../components/Gallery.jsx";

function Explorer() {
  const [cats, setCats] = useState([]);
  const [status, setStatus] = useState("");

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

  useEffect(() => {
    loadRandomCats();
  }, []);

  return (
    <main className="panel">
      <h1>Explore Cats</h1>
      <p>Find your next favorite feline!</p>

      <section className="controls">
        <button type="button" className="button" onClick={loadRandomCats}>
          Get some Cats!
        </button>
      </section>

      <p className="status">{status}</p>

      <Gallery cats={cats} />
    </main>
  );
}

export default Explorer;