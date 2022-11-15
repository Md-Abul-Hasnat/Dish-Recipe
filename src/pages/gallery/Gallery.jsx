import "./Gallery.css";
import galleryHeadImg from "../../assets/img/samosa.jpg";
import gallery1 from "../../assets/img/dish1.jpg";
import gallery2 from "../../assets/img/dish4.jpg";
import gallery3 from "../../assets/img/dish5.jpg";
import gallery4 from "../../assets/img/chicken.jpg";
import gallery5 from "../../assets/img/fish.jpg";
import gallery6 from "../../assets/img/roll.jpg";
import gallery7 from "../../assets/img/seafood.jpg";
import gallery8 from "../../assets/img/potato.jpg";
import gallery9 from "../../assets/img/pizza.jpg";

const Gallery = () => {
  const gallertyData = [
    {
      text: "Tasty Rice",
      img: gallery1,
      id: 1,
    },
    {
      text: "Sea Food",
      img: gallery2,
      id: 2,
    },
    {
      text: "Beef",
      img: gallery3,
      id: 3,
    },
    {
      text: "Chicken",
      img: gallery4,
      id: 4,
    },
    {
      text: "Fish",
      img: gallery5,
      id: 5,
    },
    {
      text: "Vegitable Rool",
      img: gallery6,
      id: 6,
    },
    {
      text: "Sea Food",
      img: gallery7,
      id: 7,
    },
    {
      text: "Delicious Dish",
      img: gallery8,
      id: 8,
    },
    {
      text: "Pizza",
      img: gallery9,
      id: 9,
    },
  ];

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
          {gallertyData.map((data) => {
            return (
              <article key={data.id}>
                <img src={data.img} alt=" Gallery Image" />
                <div className="gallery-name">
                  <h1>{data.text}</h1>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Gallery;
