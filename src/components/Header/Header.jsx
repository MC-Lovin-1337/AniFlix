import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">
        <span>Ani</span>Lix
      </a>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link
          to="home"
          spy={true}
          offset={-150}
          href="#home"
          onClick={toggleMenu}
        >
          <FormattedMessage id="home" defaultMessage="" />
        </Link>
        <Link
          to="popular"
          spy={true}
          offset={-150}
          href="#popular"
          onClick={toggleMenu}
        >
          <FormattedMessage id="popular" defaultMessage="" />
        </Link>
        <Link
          to="action"
          spy={true}
          offset={-150}
          href="#action"
          onClick={toggleMenu}
        >
          <FormattedMessage id="action" defaultMessage="" />
        </Link>
        <Link
          to="child"
          spy={true}
          offset={-150}
          href="#child"
          onClick={toggleMenu}
        >
          <FormattedMessage id="child" defaultMessage="" />
        </Link>
        <Link
          to="family"
          spy={true}
          offset={-150}
          href="#family"
          onClick={toggleMenu}
        >
          <FormattedMessage id="family" defaultMessage="" />
        </Link>
      </nav>
      <div className="icons">
        <i
          className={`fas fa-bars ${menuOpen ? "open" : ""}`}
          id="navbar"
          onClick={toggleMenu}
        ></i>
        <i className="fas fa-search" id="search-icon"></i>
        <a href="#" className="fas fa-heart"></a>
      </div>
    </header>
  );
};

export default Navigation;
