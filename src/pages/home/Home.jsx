import { UserContext } from "../../components/context/GlobalContext";
import { useContext } from "react";
import Hero from "../../components/hero/Hero";
import Cetagory from "../../components/cetagory/Cetagory";
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
