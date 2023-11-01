import React, { useEffect } from "react";
import Swiper from "swiper";
import "./Action.css";

const Action = () => {
  useEffect(() => {
    const swiper = new Swiper(".action-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
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
    <section className="action" id="action">
      <h1 className="heading">Action</h1>
      <div className="swiper action-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-1.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Kuroko's Basketball</h3>
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

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-2.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>AHIRU NO SORA</h3>
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

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-3.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Seraph of the End</h3>
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

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-4.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Kuroko's Last Game</h3>
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

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-5.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Fate/Zero</h3>
              <p>
                Guided by the spirit demon within him, orphaned naruto-home
                learns to harness his powers as a ninja in this anime adventure
                series.
              </p>
              <a href="#" className="btn">
                Download
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-6.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Hellsing Ultimate</h3>
              <p>
                Guided by the spirit demon within him, orphaned naruto-home
                learns to harness his powers as a ninja in this anime adventure
                series.
              </p>
              <a href="#" className="btn">
                Download
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-7.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>DEVILS'LINE</h3>
              <p>
                Guided by the spirit demon within him, orphaned naruto-home
                learns to harness his powers as a ninja in this anime adventure
                series.
              </p>
              <a href="#" className="btn">
                Download
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/action-8.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Legend of Exorcism</h3>
              <p>
                Guided by the spirit demon within him, orphaned naruto-home
                learns to harness his powers as a ninja in this anime adventure
                series.
              </p>
              <a href="#" className="btn">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Action);
