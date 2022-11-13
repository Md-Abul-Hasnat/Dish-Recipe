import React from "react";
import "./Loader.css";
import preloader from "../../assets/img/preloader.gif";

const Loader = () => {
  return (
    <section className="loader">
      <img src={preloader} alt="loading" />
    </section>
  );
};

export default Loader;
