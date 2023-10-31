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
                  Vor vielen Jahren wurde die Menschheit durch das Auftauchen
                  riesiger Kreaturen, die alle Menschen verschlangen, an den
                  Rand der Auslöschung gebracht. durch das Auftauchen von
                  riesigen Kreaturen, die alle Menschen verschlangen.
                  verschlangen alle Menschen.
                </p>
                <a href="download.html" className="btn">
                  Download
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
                  Es ist die Taisho-Ära in Japan. Tanjiro, ein junger Mann, der
                  Kohle verkauft, erfährt eines Tages, dass seine Familie von
                  einem Dämon getötet worden ist. wurde von einem Dämon getötet.
                </p>
                <a href="#" className="btn">
                  Download
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
                <h3>Kakegurui</h3>
                <p>
                  High Roller Yumeko Jabami will an der Hyakkaou-Akademie
                  aufräumen, einer Schule, an der die Schüler Hyakkaou-Akademie,
                  einer Schule, an der die Schüler ausschließlich nach ihren
                  Spielfähigkeiten bewertet werden ausschließlich nach ihren
                  Glücksspielfähigkeiten bewertet werden.
                </p>
                <a href="#" className="btn">
                  Download
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
                  Saitama hat sich die Heldentaten zum Hobby gemacht, und nach
                  drei Jahren zermürbenden Trainings hat er ein solches Maß an
                  Stärke erreicht, dass er jeden Gegner mit einem einzigen
                  Schlag ausschalten kann.
                </p>
                <a href="#" className="btn">
                  Download
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
                  Ein Highschool-Schüler entdeckt ein Notizbuch mit einer bösen
                  Macht: Es verleiht eine übernatürliche Fähigkeit zu töten,
                  denn wenn jemand einen Namen auf die Seiten schreibt, wird
                  diese Person sterben.
                </p>
                <a href="#" className="btn">
                  Download
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
                <h3>Naruto</h3>
                <p>
                  Naruto Uzumaki ist ein ausgestoßenes Kind in dem Ninja-Dorf,
                  in dem er lebt. In ihm steckt die Kraft einer Bestie, die vor
                  Jahren kurz davor war, das Dorf zu zerstören, der Kyubi, der
                  neunschwänzige Fuchs, was dazu führt, dass sich niemand ihm
                  nähern will, da er als verflucht gilt.
                </p>
                <a href="#" className="btn">
                  Download
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
