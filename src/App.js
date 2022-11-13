import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cetagory from "./pages/category/Category";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import SingleMeal from "./pages/singleMeal/SingleMeal";
import GlobalContext from "./components/context/GlobalContext";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cetagory/:cetagoryName" element={<Cetagory />} />
          <Route path="/cetagory/dish/:id" element={<SingleMeal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
