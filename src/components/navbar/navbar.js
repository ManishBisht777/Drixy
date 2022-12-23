import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      i am nav bar
      <p>hello</p>
      <ul>
        <Link to="/explore">explore</Link>
        <Link to="/">home</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
