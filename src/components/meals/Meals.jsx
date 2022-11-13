import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalData } from "../context/GlobalContext";

const Meals = () => {
  const { cetagory } = useContext(GlobalData);
  const cetagories = cetagory.slice(8, cetagory.length);

  return (
    <section className="cetagory">
      <h1 className="heading">Other Cetagories</h1>
      <div className="cetagory-wrapper">
        {cetagories.map((ceta) => {
          return (
            <Link
              state={{ cetagoryObj: ceta }}
              key={ceta.idCategory}
              to={`/cetagory/${ceta.strCategory}`}
            >
              <img src={ceta.strCategoryThumb} alt={ceta.strCategory} />
              <h2>{ceta.strCategory}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Meals;
