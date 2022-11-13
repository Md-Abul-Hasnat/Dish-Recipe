import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navActive, setNavActive] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  });

  return (
    <nav className={navActive ? "nav nav-active" : "nav"}>
      <Link to="/" className="logo">
        <h1>Dishes</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link onClick={handleClick} to="/">
            Services
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/">
            Pricing
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/">
            Contact
          </Link>
        </li>
        <FontAwesomeIcon
          className="fa-xmark"
          icon={faXmark}
          onClick={handleClick}
        />
      </ul>
      <FontAwesomeIcon
        className="fa-bars"
        icon={faBars}
        onClick={handleClick}
      />
    </nav>
  );
};

// guide :

// 1 = install font awesome
// 1 = install react router dom
// 3 = import browser router,routes,route in your app and wrap whole app
// 4 = import useState

export default Navbar;
