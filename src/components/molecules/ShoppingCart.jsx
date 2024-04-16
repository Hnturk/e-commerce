import List from "@mui/material/List";
import React from "react";
import Paper from "@mui/material/Paper";
import CartItem from "../atoms/CartItem.jsx";
import CarContext from "../../contexts/CarContext.jsx";
import { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export default function ShoppingCart() {
  const { cartProducts } = useContext(CarContext);

  return (
    <Paper
      data-testid="shopping-cart"
      md={6}
      sx={{
        display: "flex",
        maxWidth: "50%",
        minWidth: "220px",
        height: cartProducts.length === 0 ? 100 : 270,
        placeItems: cartProducts.length === 0 && "center",
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
        {cartProducts.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
            }}
          >
            <ShoppingCartOutlinedIcon color="primary" /> Your cart is currently
            empty.
          </div>
        ) : (
          cartProducts.map((product) => (
            <CartItem
              data-testid={`cart-item-${product.id}`}
              key={product.id}
              item={product}
            />
          ))
        )}
      </List>
    </Paper>
  );
}
