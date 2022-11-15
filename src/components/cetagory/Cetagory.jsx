import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/GlobalContext";
import "./Cetagory.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cetagory = () => {
  const { cetagories } = useContext(UserContext);

  return (
    <section className="cetagory">
      <h1 className="heading">Popular Cetagory</h1>
      <div className="cetagory-wrapper">
        {cetagories.map((cetagory) => {
          return (
            <Link
              state={{ cetagoryObj: cetagory }}
              key={cetagory.idCategory}
              to={`/cetagory/${cetagory.strCategory}`}
            >
              <LazyLoadImage
                effect="blur"
                src={cetagory.strCategoryThumb}
                alt={cetagory.strCategory}
              />
              <h2>{cetagory.strCategory}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Cetagory;
