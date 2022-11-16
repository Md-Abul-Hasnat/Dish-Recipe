import React from "react";
import "./About.css";
import dish from "../../assets/img/dish5.jpg";
import about from "../../assets/img/about.jpg";
import about1 from "../../assets/img/about1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import data from "../../data";
import MotionComponent from "../../components/motionComponent/MotionComponent";

const About = () => {
  return (
    <>
      <MotionComponent>
        <header className="sub-header">
          <img src={dish} alt="Image" />
          <div className="main-title">
            <h1>About Us</h1>
          </div>
        </header>
        <main className="about">
          <div className="about-wrapper">
            <article className="about-left">
              <img src={about} alt="Image" />
              <img className="about-bottom-img" src={about1} alt="Image" />
            </article>
            <article className="about-right">
              <h1>OUR STORY</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passage
              </p>
              <Link className="btn" to="/">
                SEE OUR CETAGORY
              </Link>
            </article>
          </div>

          <div className="slideer">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <article>
                      <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
                      <p>{data.text}</p>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </main>
      </MotionComponent>
    </>
  );
};

export default About;
