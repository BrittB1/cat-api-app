import { useState, useEffect } from "react";
import { getRandomCats } from "./services/api.js";
import Gallery from "./components/Gallery.jsx";

function App() {
  const [cats, setCats] = useState([]);
  const [status, setStatus] = useState("");

  async function loadRandomCats() {
    setStatus("Loading cats…");
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
    <>
      <header className="app-header">
        <h1>Cat Explorer</h1>
        <p className="tagline">
          Doomscrolling but there's no doom and it's just cats. You can also
          search a breed and save your favorite felines.
        </p>
      </header>

      <main className="panel">
        <section className="controls">
          <div className="cat">
            <span className="ear ear-right"></span>
            <span className="ear ear-left"></span>
            <button type="button" className="button" onClick={loadRandomCats}>
              <img src="/images/paw-button.png" alt="paw print" className="paw" />
              <span className="label">Get some Cats!</span>
            </button>
          </div>
        </section>

        <p className="status">{status}</p>
        <Gallery cats={cats} />
      </main>
    </>
  );
}

export default App;