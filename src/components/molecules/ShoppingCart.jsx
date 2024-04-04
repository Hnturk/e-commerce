import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import CartItem from "../atoms/CartItem";
import CarContext from "../../contexts/CarContext";
import { useContext } from "react";
export default function ShoppingCart() {
  const { cartProducts } = useContext(CarContext);

  return (
    <Paper
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
        {cartProducts.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </List>
    </Paper>
  );
}
