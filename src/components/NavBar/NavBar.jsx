import React, { useState } from "react";
import Logo from "/assets/logo.svg";
import Hamburger from "/assets/icon-hamburger.svg";
import Close from "/assets/icon-close.svg";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    document.body.classList.toggle("hidden");
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <a href="/">
        <div className="logo">
          <img src={Logo} alt="room logo" />
        </div>
      </a>

      <div className="hamburger-icon" onClick={handleMenu}>
        {showMenu ? (
          <img src={Close} alt="close menu" />
        ) : (
          <img src={Hamburger} alt="hamburger menu" />
        )}
      </div>

      <ul className={showMenu ? "nav-links mobile-nav" : "nav-links"}>
        <li onClick={handleMenu}>
          <a href="home">home</a>
        </li>
        <li onClick={handleMenu}>
          <a href="shop">shop</a>
        </li>
        <li onClick={handleMenu}>
          <a href="about">about</a>
        </li>
        <li onClick={handleMenu}>
          <a href="contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
