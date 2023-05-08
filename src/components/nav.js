import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(true);

  const handleClick = (mode) => {
    if (mode === 0) setActive(true);
    else setActive(false);
  };

  return (
    <div className="nav" role="navigation">
      <h1>Generic Grocery Store</h1>
      <Link to="">
        <div
          className={active ? "active" : null}
          onClick={() => handleClick(0)}
        >
          Home
        </div>
      </Link>
      <Link to="/shop">
        <div
          className={active ? null : "active"}
          onClick={() => handleClick(1)}
        >
          Shop page
        </div>
      </Link>
    </div>
  );
};

export default Nav;
