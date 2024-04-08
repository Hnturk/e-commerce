import "../style/components/organisms/container/ProductDetail-min.css"
import React from 'react'
import Navbar from '../components/organisms/navbar/Navbar';
import ProductContainer from '../components/organisms/container/ProductContainer';

function ProductCard() {
  return (
    <div>
      <Navbar />
      <ProductContainer />
    </div>
  )
}

export default ProductCard;