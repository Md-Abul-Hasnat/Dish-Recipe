import React from "react";
import dish1 from "../../assets/img/dish1.jpg";
import dish2 from "../../assets/img/dish3.jpg";
import dish3 from "../../assets/img/pizza.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleInputSubmit(e) {
    e.preventDefault();

    setInputValue("");
    navigate(`/search/${inputValue}`);
  }

  return (
    <section className="hero">
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article>
            <img src={dish3} alt="image1" />
            <div className="hero-text">
              <div>
                <h1>Looking For Your Favourite Recipe ? </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore exercitationem, temporibus assumenda <br /> quam maxime
                  aspernatur iusto ex dolores saepe odio! temporibus assumenda
                  quam maxime aspernatur iusto ex dolores saepe odio!
                </p>
                <form onSubmit={handleInputSubmit}>
                  <input
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    value={inputValue}
                    placeholder="Search Recipe"
                    required
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <img src={dish2} alt="image1" />
            <div className="hero-text">
              <div>
                <h1>Delicious Dish Recipe </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore exercitationem, temporibus assumenda quam maxime
                  aspernatur iusto ex dolores saepe odio! temporibus assumenda
                  quam maxime aspernatur iusto ex dolores saepe odio!
                </p>
                <form onSubmit={handleInputSubmit}>
                  <input
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    value={inputValue}
                    placeholder="Search Recipe"
                    required
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <img src={dish1} alt="image1" />
            <div className="hero-text">
              <div>
                <h1>Learn How To Cook </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore exercitationem, temporibus assumenda <br /> quam maxime
                  aspernatur iusto ex dolores saepe odio! temporibus assumenda
                  quam maxime aspernatur iusto ex dolores saepe odio!
                </p>
                <form onSubmit={handleInputSubmit}>
                  <input
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    value={inputValue}
                    placeholder="Search Recipe"
                    required
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
