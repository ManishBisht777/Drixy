import React, { useState } from "react";
import logo from "../../images/artsy.svg";
import { Link, NavLink } from "react-router-dom";
import ham from "../../images/ham.svg";
import close from "../../images/close.svg";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavbar = (e) => {
    e.stopPropagation();
    console.log(e.target.tagName);
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar container container--between">
      <button
        className="navbar__hamburger"
        id="togglemenu"
        aria-expanded={toggleNav}
        aria-label="toggle-menu"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <img src={ham} alt="toggle menu" />
      </button>
      <img className="navbar__logo" src={logo} alt="Artsy logo" />
      <ul
        className="container gap--lg  navbar__NavLinks navlink-link"
        onClick={(e) => {
          toggleNavbar(e);
        }}
      >
        <li>
          <img className="navbar__logo-mobile" src={logo} alt="Artsy logo" />
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active--link" : "")}
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active--link" : "")}
            to="/marketplace"
          >
            marketplace
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active--link" : "")}
            to="/auction"
          >
            auctiion
          </NavLink>
        </li>
      </ul>
      <ul className="container gap--md navbar__NavLinks ">
        <li>
          <Link className="button--secondary" to="/notification">
            Login
          </Link>
        </li>
      </ul>

      <button className="nav__close" onClick={() => setToggleNav(!toggleNav)}>
        <img src={close} alt="nav close" />
      </button>
    </nav>
  );
};

export default Navbar;
