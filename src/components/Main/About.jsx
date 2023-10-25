import React from "react";

/* Importieren von CSS-Stildefinitionen für die AboutPage */
import "../../pages/About/AboutPage.css";

/* Importieren von Link aus "react-router-dom" für Navigation */
import { Link } from "react-router-dom";

/* Importieren eines PDF-Dokuments für den Lebenslauf */
import cv from "../../cv/cv.pdf";

/* Importieren einer benutzerdefinierten Komponente ButtomGet */
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multilanguage: Importieren von FormattedMessage aus "react-intl" zur Internationalisierung von Texten */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="about-me" id="about-me">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h3>
        <h4>
          <FormattedMessage id="description" defaultMessage="" />
        </h4>
        <p>
          <FormattedMessage id="my-description" defaultMessage="" />
        </p>
        <ul>
          <li>
            <p>
              <span>
                <FormattedMessage id="years" defaultMessage="" />
              </span>
              33
            </p>
          </li>
          <li>
            <p>
              <span>Email: </span>
              sven_ebert1337@icloud.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="" />
              </span>
              Hamburg, Deutschland
            </p>
          </li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="" />
          </a>
          <div className="info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>skills</h3>
        <h4>Front-End</h4>
        <div className="skill">
          <div>
            <img
              alt="HTML"
              className="icons-skills"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
            <h5>HTML</h5>
          </div>
          <div>
            <img
              alt="CSS"
              className="icons-skills"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
            <h5>CSS</h5>
          </div>
          <div>
            <img
              alt="Js"
              className="icons-skills"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img
              alt="Tailwindcss"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
            <h5>Tailwindcss</h5>
          </div>
          <div>
            <img
              alt="React"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <h5>React</h5>
          </div>
          <div>
            <img
              alt="Bootstrap"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <h5>Bootstrap</h5>
          </div>
        </div>
        <h4>Back-End</h4>
        <div className="skill">
          <div>
            <img
              alt="Nodejs"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <h5>NodeJs</h5>
          </div>
          <div>
            <img
              alt="NextJs"
              className="icons-skills"
              src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png"
            />
            <h5>NextJs</h5>
          </div>
          <div>
            <img
              alt="npm"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            />
            <h5>NPM</h5>
          </div>
        </div>
        <h4>
          <FormattedMessage id="tools" defaultMessage="Tools" />
        </h4>
        <div className="skill">
          <div>
            <img
              alt="Visual Studio Code"
              className="icons-skills"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
            />
            <h5>VS Code</h5>
          </div>
          <div>
            <img
              alt="github"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            />
            <h5>GitHub</h5>
          </div>
          <div>
            <img
              alt="jira"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
            />
            <h5>Jira</h5>
          </div>
          <div>
            <img
              alt="vercel"
              className="icons-skills"
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
            />
            <h5>Vercel</h5>
          </div>
          <div>
            <img
              alt="confluence"
              className="icons-skills"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg"
            />
            <h5>Confluence</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
