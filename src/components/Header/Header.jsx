import React, { useContext } from "react";
import "./Header.css";

// Importiere Link-Komponente aus React Scroll für die Scroll-Navigation
import { Link } from "react-scroll";

// Importiere die NavLink-Komponente aus React Router für die interne Navigation
import { NavLink } from "react-router-dom";

// Importiere die DarkMode-Komponente
import DarkMode from "../DarkMode/DarkMode";

// Importiere die FormattedMessage-Komponente aus react-intl zur Internationalisierung
import { FormattedMessage } from "react-intl";

// Importiere den Language-Kontext aus dem Context-Modul
import { langContext } from "../../context/Context";

const Header = () => {
  // Verwende den useContext-Hook, um auf den Language-Kontext zuzugreifen
  const language = useContext(langContext);

  // Funktion, um das Menü mobil aus- und einzublenden
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    // Überwache das Scroll-Verhalten und ändere das Erscheinungsbild des Headers
    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  return (
    <header className="site-header">
      <div
        id="menu-btn"
        className="fas fa-bars"
        onClick={menuDesplegable}
      ></div>

      <NavLink className="logo" to="/">
        <p>
          <span>MC-Lovin-1337</span>
        </p>
      </NavLink>

      <nav className="navbar">
        {/* Verwende die Link-Komponente von React Scroll für die Scroll-Navigation */}
        <Link to="start" spy={true} offset={-150} href="#start">
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="about-me" spy={true} offset={-150} href="#about-me">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="projects" spy={true} offset={-150} href="#projects">
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </Link>
        <Link to="contact" spy={true} offset={-150} href="#contact">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(Header);
