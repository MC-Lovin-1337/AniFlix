import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi language */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const projectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="project-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <img src={projectImg("./project-1.jpg")} alt="projects" />
            <div className="content">
              <h3>Pokedex</h3>
              <p>Anime Website</p>
              <p className="technology">
                HTML5
                <span> -</span> Tailwind CSS
                <span> -</span> JavaScript
                <span> -</span> react
                <span> -</span> Next.Js
              </p>
              <a
                href="https://pokedex-eight-plum.vercel.app/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href="https://github.com/MC-Lovin-1337/Pokedex"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-break"></div>
      </div>
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
