import { createContext, useState, useEffect, useMemo, useCallback } from "react";

import PropTypes from 'prop-types';
import axios from "axios";
import api from "../lib/api/api";

export const CarContext = createContext();

function Provider({ children }) {

  Provider.propTypes = {
    children: PropTypes.string.isRequired
  };

  const [data, setData] = useState([]);
  const [carData, setCarData] = useState(data);
  const [brandData, setBrandData] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(() => {
    axios.get(api)
      .then(({ data }) => {
        setData(data);
        setCarData(data);
        setBrandData(Array.from(new Set(data.map((car) => ({ brand: car.brand, id: car.id })))));
        setModelData(Array.from(new Set(data.map((car) => ({ model: car.model, id: car.id })))));
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchData();

    const storedCartProducts = localStorage.getItem("cartProducts");
    const storedTotalPrice = localStorage.getItem("totalPrice");

    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, [fetchData]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    localStorage.setItem("totalPrice", totalPrice);
  }, [cartProducts, totalPrice]);


  const addAndCount = useCallback((newCartProduct) => {
    const existingProduct = cartProducts.find(({ id }) => id === newCartProduct.id);
    if (existingProduct) {
      const updatedList = cartProducts.map(object =>
        object.id === newCartProduct.id ? { ...object, count: object.count + 1 } : object
      );
      setCartProducts(updatedList);
    } else {
      setCartProducts(cartProducts => [...cartProducts, { ...newCartProduct, count: 1 }]);
    }
  }, [cartProducts]);

  const getProduct = useCallback((image, name, price, description, id) => {
    setProduct({ image, name, price, description, id });
  }, [setProduct]);

  const addToCart = useCallback((price, name, count, id) => {
    const newCartProduct = { name, price, count, id };
    setTotalPrice(totalPrice => totalPrice + parseInt(price));
    addAndCount(newCartProduct);
  }, [setTotalPrice, addAndCount]);

  const valueToShare = useMemo(() => ({
    data,
    carData,
    fetchData,
    setCarData,
    brandData,
    modelData,
    setModelData,
    totalPrice,
    setTotalPrice,
    cartProducts,
    setCartProducts,
    product,
    addAndCount,
    getProduct,
    addToCart,
    selected,
    setSelected,
    isLoading,
  }), [data, carData, fetchData, setCarData, brandData, modelData, setModelData, 
    totalPrice, setTotalPrice, cartProducts, setCartProducts, product, addAndCount, 
    getProduct, addToCart, selected, setSelected, isLoading]);

  return (
    <CarContext.Provider value={valueToShare}>{children}</CarContext.Provider>
  );
}

export { Provider };

export default CarContext;


