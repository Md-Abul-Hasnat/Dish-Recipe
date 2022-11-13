import React from "react";
import Hero from "../../components/hero/Hero";
import Cetagory from "../../components/cetagory/Cetagory";
import { useContext } from "react";
import { UserContext } from "../../components/context/GlobalContext";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Cetagory />
        </>
      )}
    </>
  );
};

export default Home;
