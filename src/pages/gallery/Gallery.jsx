import React from "react";
import "./Gallery.css";
import galleryHeadImg from "../../assets/img/seafood.jpg";
import gallery1 from "../../assets/img/dish1.jpg";
import gallery2 from "../../assets/img/dish4.jpg";
import gallery3 from "../../assets/img/dish5.jpg";
import gallery4 from "../../assets/img/chicken.jpg";
import gallery5 from "../../assets/img/fish.jpg";
import gallery6 from "../../assets/img/roll.jpg";
import gallery7 from "../../assets/img/samosa.jpg";
import gallery8 from "../../assets/img/potato.jpg";
import gallery9 from "../../assets/img/pizza.jpg";

const Gallery = () => {
  return (
    <>
      <header className="sub-header">
        <img src={galleryHeadImg} alt="Image" />
        <div className="main-title">
          <h1>Gallery</h1>
        </div>
      </header>
      <main className="gallery">
        <div className="gallery-wrapper">
          <article>
            <img src={gallery1} alt="Gallery Image" />
            <div className="gallery-name">
              <h1>Tasty Rice</h1>
            </div>
          </article>
          <article>
            <img src={gallery2} alt="Gallery Image" />
            <div className="gallery-name">
              <h1>Sea Food</h1>
            </div>
          </article>
          <article>
            <img src={gallery3} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Beef</h1>
            </div>
          </article>
          <article>
            <img src={gallery4} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Chicken</h1>
            </div>
          </article>
          <article>
            <img src={gallery5} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Fish</h1>
            </div>
          </article>
          <article>
            <img src={gallery6} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Vegitable Rool</h1>
            </div>
          </article>
          <article>
            <img src={gallery7} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Samosa</h1>
            </div>
          </article>
          <article>
            <img src={gallery8} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Delicious Dish</h1>
            </div>
          </article>
          <article>
            <img src={gallery9} alt=" Gallery Image" />
            <div className="gallery-name">
              <h1>Pizza</h1>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Gallery;
