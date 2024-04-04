import "../style/components/organisms/container/containerProduct/ProductDetail-min.css";
import React from "react";
import Navbar from "../components/organisms/navbar/Navbar";
import ProductContainer from "../components/organisms/container/ProductContainer";
import ".././style/components/organisms/container/containerProduct/ProductDetail-min.css";
function ProductCard() {
  return (
    <div>
      <Navbar />
      <ProductContainer />
    </div>
  );
}

export default ProductCard;
