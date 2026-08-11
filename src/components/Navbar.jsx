import NavItem from "./NavItem.jsx";

// Displays the main navigation for the application.
// Each NavItem receives its route and link text through props.

function Navbar() {
  return (
    <nav>

        {/* "to" tells NavItem where to navigate.
          The text between the tags becomes the "children" prop. */}
          
      <NavItem to="/">Home</NavItem>
      <NavItem to="/explore">Explore Cats</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
    </nav>
  );
}

export default Navbar;