import React from "react";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Gallery from "../../pages/gallery/Gallery";
import Home from "../../pages/home/Home";
import SingleMeal from "../../pages/singleMeal/SingleMeal";
import Cetagory from "../../pages/category/Category";
import SearchResult from "../searchResult/SearchResult";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const MotionWrapper = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:recipe" element={<SearchResult />} />
          <Route path="/cetagory/:cetagoryName" element={<Cetagory />} />
          <Route path="/dish/:id" element={<SingleMeal />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default MotionWrapper;
