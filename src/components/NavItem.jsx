import { NavLink } from "react-router-dom";

// Reusable navigation link component.
// "to" is a prop that tells NavLink which route to go to.
// "children" is a special React prop that contains whatever
// is placed between the opening and closing NavItem tags.

function NavItem({ to, children }) {
  return (
    <NavLink to={to}>
      {children}
    </NavLink>
  );
}

export default NavItem;