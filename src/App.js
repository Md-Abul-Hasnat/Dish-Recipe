import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GlobalContext from "./components/context/GlobalContext";
import ScrollTop from "./components/scrollTop/ScrollTop";
import MotionWrapper from "./components/motionWrapper/MotionWrapper";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <ScrollTop>
          <Navbar />
          <MotionWrapper />
          <Footer />
        </ScrollTop>
        <ToastContainer />
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
