import React from "react";
import "./Content.css";

// Importiere die ParticleHeaderBg-Komponente für den Partikeleffekt im Hintergrund des Headers
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

// Importiere die Link-Komponente aus React Scroll für die Scroll-Navigation
import { Link } from "react-scroll";

// Importiere die FormattedMessage-Komponente aus react-intl zur Internationalisierung
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="name" defaultMessage="" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="rol" defaultMessage="" />
        </p>

        <div className="redes-sociales">
          {/* Soziale Medien-Links mit FontAwesome-Icons */}
          <a
            href="https://www.linkedin.com/in/sven-ebert-452128298/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/MC-Lovin-1337"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=491637845768"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <div className="wrapper">
          {/* Buttons mit FontAwesome-Icons für soziale Medien */}
          <a
            className="button"
            href="https://www.linkedin.com/in/sven-ebert-452128298/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href="https://github.com/MC-Lovin-1337"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://api.whatsapp.com/send?phone=491637845768"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <span>Whatsapp</span>
          </a>
        </div>

        {/* Verwende die Link-Komponente aus React Scroll, um zum nächsten Abschnitt zu scrollen */}
        <Link to="about-me" href="#about-me">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
