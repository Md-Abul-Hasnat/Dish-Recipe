import { createContext } from "react";
import { useState, useEffect } from "react";

export const GlobalData = createContext();

const GlobalContext = ({ children }) => {
  const [cetagories, setCetagories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCetagories(data.categories));
  }, []);

  return (
    <GlobalData.Provider value={{ cetagory: cetagories }}>
      {children}
    </GlobalData.Provider>
  );
};

export default GlobalContext;
