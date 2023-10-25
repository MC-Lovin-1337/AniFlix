import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi language */
import { FormattedMessage } from "react-intl";

/* Img */
const projectImg = require.context("../../img", true);

const Project = () => {
  const [stateModal1, switchStateModal1] = useState(false);

  return (
    <div>
      <HeaderPage />

      <main>
        <section className="projects mas-proyect" id="projects">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="projectsite" defaultMessage="" />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => switchStateModal1(!stateModal1)}>
              <img
                src={projectImg("./project-1.jpg")}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
        </section>
      </main>

      <Modal estado={stateModal1} cambiarEstado={switchStateModal1}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={projectImg("./project-1-com.png")} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage id="project-info-1-p1" defaultMessage="" />
              </p>
              <p>
                <FormattedMessage id="project-info-1-p2" defaultMessage="" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://pokedex-eight-plum.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://Pokedex.com
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="project-tech" defaultMessage="" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
