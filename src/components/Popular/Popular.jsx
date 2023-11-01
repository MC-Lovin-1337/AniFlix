import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Swiper from "swiper";
import "./Popular.css";

const Popular = () => {
  useEffect(() => {
    const swiper = new Swiper(".popular-slider", {
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
    <section className="popular" id="popular">
      <h1 className="heading">Populares</h1>
      <div className="swiper popular-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-1.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>naruto</h3>
              <p>
                <FormattedMessage
                  id="naruto-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-2.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>One-Punch Man</h3>
              <p>
                <FormattedMessage
                  id="onePunch-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-3.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>DEATH NOTE</h3>
              <p>
                <FormattedMessage
                  id="death-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-4.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Black Clover</h3>
              <p>
                <FormattedMessage
                  id="clover-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-5.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Jujutsu Kaisen</h3>
              <p>
                <FormattedMessage
                  id="jujutsu-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-6.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Haikyu!!</h3>
              <p>
                <FormattedMessage
                  id="haikyu-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-7.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Kuroko's Basketball</h3>
              <p>
                <FormattedMessage
                  id="kuroko-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-8.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>My Hero Academia</h3>
              <p>
                <FormattedMessage
                  id="myHero-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-9.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Dr. Stone</h3>
              <p>
                <FormattedMessage
                  id="drStone-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-10.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Tokyo Revengers</h3>
              <p>
                <FormattedMessage
                  id="tokyo-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-11.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Sword Art Online</h3>
              <p>
                <FormattedMessage
                  id="sword-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-12.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>KENGAN ASHURA</h3>
              <p>
                <FormattedMessage
                  id="kengan-pop"
                  defaultMessage="Default Text"
                />
              </p>
              <a href="#" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="box"
              style={{
                backgroundImage: `url(${require("../../img/anime-img-13.jpg")})`,
              }}
            ></div>
            <div className="content">
              <h3>Attack on Titan</h3>
              <p>
                Geführt von seinem inneren Dämon lernt der Waisenjunge
                naruto-home, seine in dieser popular-Abenteuerserie, sich seine
                Kräfte als Ninja zunutze zu machen.
              </p>
              <a href="download.html" className="btn">
                <FormattedMessage id="btn-down" defaultMessage="Default Text" />
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default React.memo(Popular);
