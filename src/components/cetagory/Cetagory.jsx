import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Cetagory.css";

const Cetagory = () => {
  const location = useLocation();

  const [cetagories, setCetagories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCetagories(data.categories.slice(0, 8)));
  }, []);

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
              <img src={cetagory.strCategoryThumb} alt={cetagory.strCategory} />
              <h2>{cetagory.strCategory}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Cetagory;
