import React from "react";
import "./Gallery.css";
import galleryHeadImg from "../../assets/img/seafood.jpg";
import gallery1 from "../../assets/img/dish1.jpg";
import gallery2 from "../../assets/img/dish4.jpg";
import gallery3 from "../../assets/img/dish5.jpg";

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
          </article>
          <article>
            <img src={gallery2} alt="Gallery Image" />
          </article>
          <article>
            <img src={gallery3} alt=" Gallery Image" />
          </article>
        </div>
      </main>
    </>
  );
};

export default Gallery;
