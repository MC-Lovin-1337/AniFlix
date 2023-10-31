import React, { useEffect } from "react";
import Swiper from "swiper"; // Stellen Sie sicher, dass Sie Swiper korrekt importieren
import "./Anime.css";

const Anime = () => {
  useEffect(() => {
    // Hier können Sie die Slider-Initialisierungen durchführen
    const animeSlider = new Swiper(".anime-slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
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
    <section className="anime" id="anime">
      <h1 className="heading">Populares</h1>
      <div className="swiper anime-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-1.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Naruto</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine Kräfte als Ninja in dieser Anime-Abenteuerserie
                einzusetzen.
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
                backgroundImage: `url(${require("../../img/anime-img-2.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>One-Punch Man</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-3.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>DEATH NOTE</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-4.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Black Clover</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-5.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Jujutsu Kaisen</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-6.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Haikyu!!</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-7.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Kuroko's Basketball</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-8.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>My Hero Academia</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-9.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Dr. Stone</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-10.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Tokyo Revengers</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-11.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Sword Art Online</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-12.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>KENGAN ASHURA</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
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
                backgroundImage: `url(${require("../../img/anime-img-13.jpg")})`,
              }}
            ></div>
            <div class="content">
              <h3>Attack on Titan</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge Naruto,
                seine in dieser Anime-Abenteuerserie, sich seine Kräfte als
                Ninja zunutze zu machen.
              </p>
              <a href="download.html" class="btn">
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default React.memo(Anime);
