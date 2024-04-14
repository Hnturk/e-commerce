import List from "@mui/material/List";
import React from "react";
import Paper from "@mui/material/Paper";
import CartItem from "../atoms/CartItem.jsx";
import CarContext from "../../contexts/CarContext.jsx";
import { useContext } from "react";
export default function ShoppingCart() {
  const { cartProducts } = useContext(CarContext);

  return (
    <Paper
      data-testid = "shopping-cart"
      md={6}
      sx={{
        display: "flex",
        maxWidth: "50%",
        minWidth: "220px",
        height: 270,
      }}
    >
      <List
        sx={{
          width: "100%",
          overflowY: "auto",
          maxHeight: "270px",
          padding: 0,
        }}
      >
        {cartProducts.map((product) => (
          <CartItem
            data-testid={`cart-item-${product.id}`}
            key={product.id}
            item={product}
          />
        ))}
      </List>
    </Paper>
  );
}
