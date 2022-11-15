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
import ScrollTop from "./components/scrollTop/ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchResult from "./components/searchResult/SearchResult";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <ScrollTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search/:recipe" element={<SearchResult />} />
            <Route path="/cetagory/:cetagoryName" element={<Cetagory />} />
            <Route path="/dish/:id" element={<SingleMeal />} />
          </Routes>
          <Footer />
        </ScrollTop>
        <ToastContainer />
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
