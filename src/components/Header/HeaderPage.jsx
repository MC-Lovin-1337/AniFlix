import React, { useContext } from "react";
import "./Header.css";

// Importiere die NavLink-Komponente aus React Router für die Navigation
import { NavLink } from "react-router-dom";

// Importiere die DarkMode-Komponente
import DarkMode from "../DarkMode/DarkMode";

// Importiere die FormattedMessage-Komponente aus react-intl zur Internationalisierung
import { FormattedMessage } from "react-intl";

// Importiere den Language-Kontext aus dem Context-Modul
import { langContext } from "../../context/Context";

const HeaderPage = () => {
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
        {/* Verwende NavLink für die interne Navigation */}
        <NavLink to="/" offset={-150} duration={500}>
          <FormattedMessage id="home" defaultMessage="Home" />
        </NavLink>
        <NavLink to="/about" offset={-150} duration={500}>
          <FormattedMessage id="about" defaultMessage="About me" />
        </NavLink>
        <NavLink to="/project" offset={-150} duration={500}>
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </NavLink>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(HeaderPage);
