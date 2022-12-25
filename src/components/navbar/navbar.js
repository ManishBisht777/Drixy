import React, { useState } from "react";
import logo from "../../images/artsy.svg";
import { Link, NavLink } from "react-router-dom";
import ham from "../../images/ham.svg";
import close from "../../images/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/AuthSlice";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const toggleNavbar = (e) => {
    e.stopPropagation();
    console.log(e.target.tagName);
    setToggleNav(!toggleNav);
  };

  const dispatch = useDispatch();

  const logoutHandle = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
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
      <h1 className="logo">Drixy</h1>
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
            to="/explore"
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active--link" : "")}
            to="/combine"
          >
            Build
          </NavLink>
        </li>
      </ul>

      <ul className="container gap--md navbar__NavLinks ">
        {!user ? (
          <li>
            <Link className="button--secondary" to="/login">
              Login
            </Link>
          </li>
        ) : (
          <>
            <button onClick={() => logoutHandle()}>Logout</button>
            <li>
              <Link className="button--secondary" to="/imageupload">
                Upload Image
              </Link>
            </li>
          </>
        )}
      </ul>

      <button className="nav__close" onClick={() => setToggleNav(!toggleNav)}>
        <img src={close} alt="nav close" />
      </button>
    </nav>
  );
};

export default Navbar;
