import { UserContext } from "../../components/context/GlobalContext";
import { useContext } from "react";
import Hero from "../../components/hero/Hero";
import Cetagory from "../../components/cetagory/Cetagory";
import Loader from "../../components/loader/Loader";
import MotionComponent from "../../components/motionComponent/MotionComponent";

const Home = () => {
  const { loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MotionComponent>
            <Hero />
            <Cetagory />
          </MotionComponent>
        </>
      )}
    </>
  );
};

export default Home;
