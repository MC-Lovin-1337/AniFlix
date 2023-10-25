import React from "react";
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

/* Multilanguage */
import { FormattedMessage } from "react-intl";

const Contact = () => (
  <section className="contact" id="contact">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Contact" />
    </h2>
    <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
      <FormattedMessage id="contact-info" defaultMessage="" />
      <Typical
        className="site-contacto"
        loop={Infinity}
        wrapper="b"
        steps={[
          "Email",
          1500,
          "WhatsApp",
          1500,
          "Linkedin",
          1500,
          "Github",
          1500,
        ]}
      />
    </h3>
    <div className="icons">
      <a
        href="mailto:sven_ebert1337@icloud.com"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fas fa-envelope"></span>
        </div>
        <div className="text">Email</div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=01637845768"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-whatsapp"></span>
        </div>
        <div className="text">Whatsapp</div>
      </a>
      <a
        href="https://www.linkedin.com/in/sven-ebert-452128298/"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-linkedin-in"></span>
        </div>
        <div className="text">Linkedin</div>
      </a>

      <a
        href="https://github.com/MC-Lovin-1337"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in"
      >
        <div className="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-github-square"></span>
        </div>
        <div className="text">GitHub</div>
      </a>
    </div>
  </section>
);

export default React.memo(Contact);
