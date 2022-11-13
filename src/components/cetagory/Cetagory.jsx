import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalData } from "../context/GlobalContext";
import "./Cetagory.css";

const Cetagory = () => {
  const { cetagory } = useContext(GlobalData);

  const cetagories = cetagory.slice(0, 8);

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
