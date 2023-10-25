import React from "react";
import "./AboutPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/cv.pdf";

/* Multi language */
import { FormattedMessage } from "react-intl";

/* Img */
import imgabout from "../../img/home.jpg";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      <main>
        <section className="about-me-seccion" id="about-me">
          <div className="about-me-container">
            <div className="about-me-img-container">
              <img src={imgabout} alt="" className="about-me-img" />

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
                className="btn-codigo cv buttonDownload"
              >
                <FormattedMessage id="btn-cv" defaultMessage="" />
              </a>
            </div>
            <div className="about-me-info">
              <p>
                <FormattedMessage id="about-info-1" defaultMessage="" />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage id="about-info-2" defaultMessage="" />
                </p>

                <p>
                  <FormattedMessage id="about-info-3" defaultMessage="" />
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="HTML"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  title="HTML5"
                />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-1" defaultMessage="" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="CSS"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  title="CSS3"
                />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-2" defaultMessage="" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="Js"
                  className="skills-img icon-li"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                  title="Java Script"
                />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-3" defaultMessage="" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="Sass"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  title="Sass"
                />
                <h2 className="skill-name">Tailwind CSS</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-4" defaultMessage="" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="react"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="React"
                />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-5" defaultMessage="" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-down"
                data-aos-delay="300"
              >
                <img
                  alt="Bootstrap"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  title="Bootstrap"
                />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-6" defaultMessage="" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="jQuery"
                  className="skills-img"
                  src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png"
                  title="NextJs"
                />
                <h2 className="skill-name">NextJs</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-7" defaultMessage="" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="npm"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                  title="npm"
                />
                <h2 className="skill-name">npm</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-8" defaultMessage="" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="nodejs"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-9" defaultMessage="" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default About;
