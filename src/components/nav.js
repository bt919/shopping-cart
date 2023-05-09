import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav" role="navigation">
      <h1>Generic Grocery Store</h1>
      <NavLink
        to=""
        className={({ isActive, isPending }) => {
          return isActive ? "active" : "";
        }}
      >
        <div className="navlink">Home</div>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive, isPending }) => {
          return isActive ? "active" : "";
        }}
      >
        <div className="navlink">Shop page</div>
      </NavLink>
    </div>
  );
};

export default Nav;
