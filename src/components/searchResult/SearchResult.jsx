import "./SearchResult.css";
import img from "../../assets/img/search-bg.jpg";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/GlobalContext";
import Loader from "../loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MotionComponent from "../motionComponent/MotionComponent";

const SearchResult = () => {
  const { loading, setLoading } = useContext(UserContext);
  const { recipe } = useParams();
  const [dishes, setdishes] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
      .then((res) => res.json())
      .then((data) => {
        setdishes(data.meals);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MotionComponent>
            <header className="sub-header">
              <img src={img} alt="Image" />
              <div className="main-title">
                <h1>{recipe}</h1>
              </div>
            </header>

            <main className="search">
              {dishes ? (
                <div className="search-wrapper">
                  {dishes.map((dish) => {
                    return (
                      <article key={dish.idMeal} className="dish">
                        <div className="top">
                          <LazyLoadImage
                            effect="blur"
                            src={dish.strMealThumb}
                            alt="image"
                          />
                        </div>
                        <div className="bottom">
                          <h1>{dish.strMeal}</h1>
                          <Link
                            to={`/dish/${dish.idMeal}`}
                            className="view-btn"
                          >
                            View More
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <h1 className="failed">Not A Single Recipe Found</h1>
              )}
            </main>
          </MotionComponent>
        </>
      )}
    </>
  );
};

export default SearchResult;
