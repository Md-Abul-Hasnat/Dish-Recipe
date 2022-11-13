import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleMeal.css";

const SingleMeal = () => {
  const id = useParams();

  const [selectedMeal, setSelectedMeal] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
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
              <img
                src={selectedMeal.strMealThumb}
                alt={selectedMeal.strMealThumb}
              />
              <h1>Name : {selectedMeal.strMeal}</h1>
              <h1>Area : {selectedMeal.strArea}</h1>
              <h1>Cetagory : {selectedMeal.strCategory}</h1>
              <a
                className="yt-btn"
                href={selectedMeal.strYoutube}
                target="_blank"
              >
                Youtube Instruction
              </a>
            </div>

            <p>
              <span> Process</span> : {selectedMeal.strInstructions}
            </p>
          </main>
        </>
      )}
    </>
  );
};

export default SingleMeal;
