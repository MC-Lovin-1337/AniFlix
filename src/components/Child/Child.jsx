import React, { useEffect } from "react";
import Swiper from "swiper";
import "./Child.css";

const Child = () => {
  useEffect(() => {
    const swiper = new Swiper(".child-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
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
    <section class="child" id="child">
      <h1 class="heading">Child</h1>
      <div class="swiper child-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/child-1.jpg")})`,
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
                backgroundImage: `url(${require("../../img/child-2.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Beyblade Burst Turbo</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Download
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/child-3.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Bakugan: Battle Planet</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Download
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/child-4.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Sonic X</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Download
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/child-5.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Yowamushi Pedal</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Download
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/child-6.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Shimajiro: A Adventure</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Download
              </a>
            </div>
          </div>

          <div class="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/child-7.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Go Astro Boy Go!</h3>
              <p>
                Guided by the spirit demon within him, orphaned Naruto learns to
                harness his powers as a ninja in this anime adventure series.
              </p>
              <a href="#" class="btn">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Child);
