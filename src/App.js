import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cetagory from "./pages/category/Category";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cetagory/:cetagoryName" element={<Cetagory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// use font awesome :  <FontAwesomeIcon icon={faCoffee} />

// demo website : http://preview.themeforest.net/item/aaem-cafe-restaurant-mobile-template/full_screen_preview/21492190?_ga=2.232797022.1192689886.1668171366-633208275.1663460760

// api url : https://www.themealdb.com/api.php

// search meals by name : www.themealdb.com/api/json/v1/1/search.php?s= mealname
// view meal detail by id : www.themealdb.com/api/json/v1/1/lookup.php?i= id here
// look for a random meal : www.themealdb.com/api/json/v1/1/random.php
// get all meal category : www.themealdb.com/api/json/v1/1/categories.php
// filter meal by cetagory : www.themealdb.com/api/json/v1/1/filter.php?c=categoryhere

export default App;
