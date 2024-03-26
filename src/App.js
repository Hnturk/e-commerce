import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarContext from "./contexts/Context";
import Main from "./pages/Main";
import ProductCard from "./pages/ProductCard";


function App() {

  const { fetchCars } = useContext(CarContext);
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/product" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;