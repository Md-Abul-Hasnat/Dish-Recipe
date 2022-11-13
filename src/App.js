import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cetagory from "./pages/category/Category";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import GlobalContext from "./components/context/GlobalContext";
import SingleMeal from "./pages/singleMeal/SingleMeal";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cetagory/:cetagoryName" element={<Cetagory />} />
          <Route path="/cetagory/dish/:id" element={<SingleMeal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext>
  );
}

// api url : https://www.themealdb.com/api.php

// search meals by name : www.themealdb.com/api/json/v1/1/search.php?s= mealname
// view meal detail by id : www.themealdb.com/api/json/v1/1/lookup.php?i= id here
// look for a random meal : www.themealdb.com/api/json/v1/1/random.php
// get all meal category : www.themealdb.com/api/json/v1/1/categories.php
// filter meal by cetagory : www.themealdb.com/api/json/v1/1/filter.php?c=categoryhere

export default App;
