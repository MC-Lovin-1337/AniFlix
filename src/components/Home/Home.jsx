import React from "react";

import "./Home.css";

import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Navigation = () => {
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
        </div>
      </div>
    </section>
  );
};

export default React.memo(Navigation);
