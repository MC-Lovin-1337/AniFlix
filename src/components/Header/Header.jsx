import React from "react";

import "./Header.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Navigation = () => {
  return (
    <header>
      <a href="#" className="logo">
        <span>Ani</span>Lix
      </a>
      <nav className="navbar">
        <Link to="home" spy={true} offset={-150} href="#home">
          <FormattedMessage id="home" defaultMessage="" />
        </Link>
        <Link to="popular" spy={true} offset={-150} href="#popular">
          <FormattedMessage id="popular" defaultMessage="" />
        </Link>
        <Link to="action" spy={true} offset={-150} href="#action">
          <FormattedMessage id="action" defaultMessage="" />
        </Link>
        <Link to="child" spy={true} offset={-150} href="#child">
          <FormattedMessage id="child" defaultMessage="" />
        </Link>
        <Link to="family" spy={true} offset={-150} href="#family">
          <FormattedMessage id="family" defaultMessage="" />
        </Link>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars"></i>
        <i className="fas fa-search" id="search-icon"></i>
        <a href="#" className="fas fa-heart"></a>
      </div>
    </header>
  );
};

export default React.memo(Navigation);
