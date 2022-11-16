import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./SingleMeal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MotionComponent from "../../components/motionComponent/MotionComponent";

const SingleMeal = () => {
  const id = useParams();

  const [selectedMeal, setSelectedMeal] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  const ytUrl = selectedMeal?.strYoutube?.split("=");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MotionComponent>
            <header className="dish-hero">
              <img
                src={selectedMeal.strMealThumb}
                alt={selectedMeal.strMealThumb}
              />
              <div className="dish-title">
                <h1>{selectedMeal.strMeal}</h1>
              </div>
            </header>

            <main className="dish-details">
              <div className="dish-top">
                <LazyLoadImage
                  effect="blur"
                  src={selectedMeal.strMealThumb}
                  alt={selectedMeal.strMealThumb}
                />
                <h1>Name : {selectedMeal.strMeal}</h1>
                <h1>Region : {selectedMeal.strArea}</h1>
                <h1>Cetagory : {selectedMeal.strCategory}</h1>
              </div>

              <div>
                <iframe
                  src={`https://www.youtube.com/embed/${ytUrl[1]}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p>
                  <span> Process</span> : {selectedMeal.strInstructions}
                </p>
              </div>
            </main>
          </MotionComponent>
        </>
      )}
    </>
  );
};

export default SingleMeal;
