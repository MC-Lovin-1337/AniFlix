import React, { useEffect } from "react";
import Swiper from "swiper";
import "./Family.css";

const Family = () => {
  useEffect(() => {
    const swiper = new Swiper(".family-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }, []);

  return (
    <section class="family" id="family">
      <h1 class="heading">Family</h1>
      <div class="swiper family-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-1.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Beyblade</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge
                naruto-home, seine in dieser Anime-Abenteuerserie, sich seine
                Kräfte als Ninja zunutze zu machen.
              </p>
              <a href="#" className="btn">
                Download
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-2.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Pok�mon the Movie</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-3.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Hows Moving Castle</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-4.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Spirited Away</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-5.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>My Neighbor Totoro</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-6.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Kikis Delivery Service</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-7.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Ponyo</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/family-8.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Arrietty</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Family);
