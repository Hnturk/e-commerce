import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import CartItem from "../atoms/CartItem";
import CarContext from "../../contexts/CarContext";
import { useContext } from "react";
export default function ShoppingCart() {

  const { cartProducts } = useContext(CarContext)

  return (
    <Paper
      md={6}
      sx={{
        display: "flex",
        maxWidth: "50%",
        minWidth: "250px",
        height: 270,
        alignItems: "center"

      }}
    >
      <List sx={{ width: "100%", overflowY: "auto", maxHeight: "250px", padding: 0}}>
        {cartProducts.map(item => 
        <CartItem key={item.id} item={item} />
        )}
      </List>
    </Paper>
  );
}
