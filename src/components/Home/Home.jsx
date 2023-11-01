import React, { useEffect } from "react";
import Swiper from "swiper"; // Stellen Sie sicher, dass Sie Swiper korrekt importieren

import "./Home.css";

import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Home = () => {
  useEffect(() => {
    // Hier können Sie die Slider-Initialisierungen durchführen
    const homeSlider = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000, // Ändern Sie den Wert auf 2000 für 2 Sekunden Intervall
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  }, []);

  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/home-img-1.jpeg")})`,
              }}
            >
              <div className="content">
                <h3>Attack on Titan</h3>
                <p>
                  <FormattedMessage
                    id="aot-home"
                    defaultMessage="Default Text"
                  />
                </p>

                <a href="download.html" className="btn">
                  <FormattedMessage
                    id="btn-down"
                    defaultMessage="Default Text"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/home-img-2.jpeg")})`,
              }}
            >
              <div className="content">
                <h3>Demon Slayer</h3>
                <p>
                  <FormattedMessage
                    id="demon-home"
                    defaultMessage="Default Text"
                  />
                </p>
                <a href="#" className="btn">
                  <FormattedMessage
                    id="btn-down"
                    defaultMessage="Default Text"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/home-img-3.jpeg")})`,
              }}
            >
              <div className="content">
                <h3>kakegurui</h3>
                <p>
                  <FormattedMessage
                    id="kakegurui-home"
                    defaultMessage="Default Text"
                  />
                </p>
                <a href="#" className="btn">
                  <FormattedMessage
                    id="btn-down"
                    defaultMessage="Default Text"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/home-img-4.jpeg")})`,
              }}
            >
              <div className="content">
                <h3>One Punch Man</h3>
                <p>
                  <FormattedMessage
                    id="onePunch-home"
                    defaultMessage="Default Text"
                  />
                </p>
                <a href="#" className="btn">
                  <FormattedMessage
                    id="btn-down"
                    defaultMessage="Default Text"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/home-img-5.jpeg")})`,
              }}
            >
              <div className="content">
                <h3>DEATH NOTE</h3>
                <p>
                  <FormattedMessage
                    id="death-home"
                    defaultMessage="Default Text"
                  />
                </p>
                <a href="#" className="btn">
                  <FormattedMessage
                    id="btn-down"
                    defaultMessage="Default Text"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/home-img-6.jpeg")})`,
              }}
            >
              <div className="content">
                <h3>naruto</h3>
                <p>
                  <FormattedMessage
                    id="naruto-home"
                    defaultMessage="Default Text"
                  />
                </p>
                <a href="#" className="btn">
                  <FormattedMessage
                    id="btn-down"
                    defaultMessage="Default Text"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);
