import React from "react";
import "./Footer.css";

// Diese Komponente stellt den Footer der Webseite dar
const Footer = () => {
  return (
    <footer className="footer">
      <div className="site-footer">
        <div></div> {/* Platzhalterinhalt, kann später gefüllt werden */}
        <div className="social-network">
          {/* Links zu verschiedenen sozialen Medien */}
          <a
            href="https://github.com/MC-Lovin-1337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> {/* GitHub-Icon */}
          </a>
          <a
            href="https://www.linkedin.com/in/sven-ebert-452128298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> {/* LinkedIn-Icon */}
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=491637845768"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> {/* WhatsApp-Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
