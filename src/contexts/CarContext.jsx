import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import api from "../lib/api/api";
export const CarContext = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [carData, setCarData] = useState(data);
  const [brandData, setBrandData] = useState(data);
  const [modelData, setModelData] = useState(data);
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [productCount, setProductCount] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const fetchData = () => {
    axios.get(api)
      .then(response => response.data)
      .then(data => {
        setData(data);
        setCarData(data);
        setBrandData(Array.from(new Set(data.map((car) => car.brand))));
        setModelData(Array.from(new Set(data.map((car) => car.model))));
      })
      .catch(error => console.log(error));
  };



  function addAndCount(newCartProduct) {
    const isSameID = cartProducts.some(
      (object) => object.id === newCartProduct.id
    );
    if (isSameID) {
      const updatedList = cartProducts.map((object) =>
        object.id === newCartProduct.id
          ? { ...object, count: object.count + 1 }
          : object
      );
      setCartProducts(updatedList);
    } else {
      const updatedList = [...cartProducts, { ...newCartProduct, count: 1 }];
      setCartProducts(updatedList);
    }
  }

  function getProduct(image, name, price, description, id) {
    const newProduct = { image, name, price, description, id };
    setProduct([newProduct]);
  }

  function addToCart(price, name, count, id) {
    const newCartProduct = { name, price, count, id };
    setTotalPrice(totalPrice + parseInt(price));
    addAndCount(newCartProduct);
  }

  useEffect(() => {
    let newData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setCarData(newData);
  }, [search, data]);


  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    const storedTotalPrice = localStorage.getItem("totalPrice");

    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    localStorage.setItem("totalPrice", totalPrice);
  }, [cartProducts, totalPrice]);

  const valueToShare = {
    data,
    setData,
    brandData,
    setBrandData,
    setSearch,
    carData,
    setCarData,
    fetchData,
    totalPrice,
    setTotalPrice,
    brandSearch,
    setBrandSearch,
    modelSearch,
    setModelSearch,
    modelData,
    setModelData,
    productCount,
    setProductCount,
    cartProducts,
    setCartProducts,
    isVisible,
    setIsVisible,
    product,
    setProduct,
    addAndCount,
    getProduct,
    addToCart,
    isClicked,
    setIsClicked,
  };

  return (
    <CarContext.Provider value={valueToShare}>{children}</CarContext.Provider>
  );
}

export { Provider };

export default CarContext;
