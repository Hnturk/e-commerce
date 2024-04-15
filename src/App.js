import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarContext from "./contexts/CarContext.jsx";
import Main from "./pages/Main.jsx";
import ProductCard from "./pages/ProductCard.jsx";


function App() {


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