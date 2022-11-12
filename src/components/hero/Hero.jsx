import React from "react";
import { Link } from "react-router-dom";
import dish1 from "../../assets/img/dish2.jpg";
import dish2 from "../../assets/img/seafood.jpg";
import dish3 from "../../assets/img/pizza.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article>
            <img src={dish1} alt="image1" />
            <div className="hero-text">
              <div>
                <h1>Welcome To Dishes </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore exercitationem, temporibus assumenda <br /> quam maxime
                  aspernatur iusto ex dolores saepe odio! temporibus assumenda
                  quam maxime aspernatur iusto ex dolores saepe odio!
                </p>
                <Link className="btn" to="/">
                  View Menu
                </Link>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <img src={dish2} alt="image1" />
            <div className="hero-text">
              <div>
                <h1>Delicious Dish Menu </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore exercitationem, temporibus assumenda quam maxime
                  aspernatur iusto ex dolores saepe odio! temporibus assumenda
                  quam maxime aspernatur iusto ex dolores saepe odio!
                </p>
                <Link className="btn" to="/">
                  View Menu
                </Link>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <img src={dish3} alt="image1" />
            <div className="hero-text">
              <div>
                <h1>Learn How To Cook </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore exercitationem, temporibus assumenda <br /> quam maxime
                  aspernatur iusto ex dolores saepe odio! temporibus assumenda
                  quam maxime aspernatur iusto ex dolores saepe odio!
                </p>
                <Link className="btn" to="/">
                  View Menu
                </Link>
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
