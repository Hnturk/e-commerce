import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import api from "../lib/api/api";

export const CarContext = createContext();

function Provider({ children }) {
  Provider.propTypes = {
    children: PropTypes.string.isRequired,
  };

  const [data, setData] = useState([]);
  const [carData, setCarData] = useState(data);
  const [brandData, setBrandData] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [selectedModels, setSelectedModels] = useState(new Set());
  const [query, setQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(() => {
    axios
      .get(api)
      .then(({ data }) => {
        setData(data);
        setCarData(data);
        setBrandData(Array.from(new Set(data.map(({ brand }) => brand))));
        setModelData(Array.from(new Set(data.map(({ model }) => model))));
      })
      .catch((error) => console.error(error))
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

  const addAndCount = useCallback(
    (newCartProduct) => {
      const existingProduct = cartProducts.find(
        ({ id }) => id === newCartProduct.id
      );
      if (existingProduct) {
        const updatedList = cartProducts.map((object) =>
          object.id === newCartProduct.id
            ? { ...object, count: object.count + 1 }
            : object
        );
        setCartProducts(updatedList);
      } else {
        setCartProducts((cartProducts) => [
          ...cartProducts,
          { ...newCartProduct, count: 1 },
        ]);
      }
    },
    [cartProducts]
  );

  const getProduct = useCallback(
    (image, name, price, description, id) => {
      setProduct({ image, name, price, description, id });
    },
    [setProduct]
  );

  const addToCart = useCallback(
    (price, name, count, id) => {
      const newCartProduct = { name, price, count, id };
      setTotalPrice((totalPrice) => totalPrice + parseInt(price));
      addAndCount(newCartProduct);
    },
    [setTotalPrice, addAndCount]
  );

  useEffect(() => {
    let filteredCarData = [...data];

    if (selectedBrands.size > 0) {
      filteredCarData = filteredCarData.filter((car) =>
        selectedBrands.has(car.brand)
      );
    }

    if (selectedModels.size > 0) {
      filteredCarData = filteredCarData.filter((car) =>
        selectedModels.has(car.model)
      );
    }

    if (query) {
      filteredCarData = filteredCarData.filter((car) =>
        car.name.toLowerCase().includes(query)
      );
    }

    const sortOptions = {
      oldToNew: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      newToOld: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      highToLow: (a, b) => parseFloat(b.price) - parseFloat(a.price),
      lowToHigh: (a, b) => parseFloat(a.price) - parseFloat(b.price),
    };
    if (selectedValue) {
      filteredCarData.sort(sortOptions[selectedValue]);
    }

    if (!selectedBrands && !selectedModels && !query && !selectedValue) {
      filteredCarData = [...data];
    }

    setCarData(filteredCarData);
  }, [selectedBrands, selectedModels, query, selectedValue, data]);

  const valueToShare = useMemo(
    () => ({
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
      selectedBrands,
      setSelectedBrands,
      isLoading,
      selectedModels,
      setSelectedModels,
      query,
      setQuery,
      selectedValue,
      setSelectedValue,
    }),
    [
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
      selectedBrands,
      setSelectedBrands,
      isLoading,
      query,
      setQuery,
      selectedModels,
      setSelectedModels,
      selectedValue,
      setSelectedValue,
    ]
  );

  return (
    <CarContext.Provider value={valueToShare}>{children}</CarContext.Provider>
  );
}

export { Provider };

export default CarContext;
