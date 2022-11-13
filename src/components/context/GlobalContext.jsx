import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const GlobalContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cetagories, setCetagories] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCetagories(
          data.categories.filter((ceta) => ceta.idCategory !== "7")
        );
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ loading, setLoading, cetagories }}>
      {children}
    </UserContext.Provider>
  );
};

export default GlobalContext;
