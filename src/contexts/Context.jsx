import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const CarContext = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [cars, setCars] = useState(data);
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

  const fetchCars = async () => {
    const response = await axios.get(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    setData(response.data);
    setCars(response.data);
    setBrandData(response.data);
    setModelData(response.data);
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
    setCars(newData);
  }, [search, data]);

  useEffect(() => {
    let newData = data.filter((item) =>
      item.brand.toLowerCase().includes(brandSearch.toLowerCase().trim())
    );
    setBrandData(newData);
  }, [brandSearch, data]);

  useEffect(() => {
    let newData = data.filter((item) =>
      item.model.toLowerCase().includes(modelSearch.toLowerCase().trim())
    );
    setModelData(newData);
  }, [modelSearch, data]);


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
    cars,
    setCars,
    fetchCars,
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
    addToCart
  };

  return (
    <CarContext.Provider value={valueToShare}>{children}</CarContext.Provider>
  );
}

export { Provider };

export default CarContext;
