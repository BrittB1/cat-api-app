import { Link } from "react-router-dom";
import catLandingPage from "../assets/images/cat-landing-page.jpg";

// Landing page for the Cat Explorer application
function Home() {
  return (
    <main className="home">
      <h1>Cat Explorer</h1>



      {/* Visual element for the landing page */}
      <img
        src={catLandingPage}
        alt="Cat sitting in a meadow"
        className="home-image"
      />

      {/* Interactive link that takes the user to the cat explorer */}
      <Link to="/explore" className="button">
        Explore Cats
      </Link>
    </main>
  );
}

export default Home;