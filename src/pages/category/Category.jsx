import { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { UserContext } from "../../components/context/GlobalContext";
import Loader from "../../components/loader/Loader";
import "./category.css";

const Category = () => {
  const { cetagoryName } = useParams();
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  const { strCategory, strCategoryThumb } = location.state.cetagoryObj;

  const [selectedCetagory, setselectedCetagory] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cetagoryName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setselectedCetagory(data.meals.slice(0, 20));
        setLoading(false);
      });
  }, []);

  function strRuducer(text, length) {
    return text.slice(0, length);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <header className="sub-hero">
            <img src={strCategoryThumb} alt={strCategoryThumb} />
            <div className="cetagory-title">
              <h1>{strCategory}</h1>
            </div>
          </header>
          <main className="cetagories">
            <div className="cetagories-wrapper">
              {selectedCetagory.map((cetagory) => {
                return (
                  <article key={cetagory.idMeal}>
                    <div className="cetagory-img">
                      <img
                        src={cetagory.strMealThumb}
                        alt={cetagory.strMealThumb}
                      />
                    </div>
                    <div className="cetagory-bottom">
                      <h1>{strRuducer(cetagory.strMeal, 18)}...</h1>
                      <Link className="btn" to={`/dish/${cetagory.idMeal}`}>
                        View Detail
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Category;
