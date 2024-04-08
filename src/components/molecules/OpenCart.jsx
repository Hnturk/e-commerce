import {React, useContext, useState} from 'react'
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CarContext from "../../contexts/CarContext";
import CartItem from '../atoms/CartItem';

function OpenCart() {
    
    const { totalPrice, cartProducts } = useContext(CarContext);

    const [cartOpen, setCartOpen] = useState(false);
  
const cartDrawer = (newOpen) => () => {
      setCartOpen(newOpen);
    };

  return (
    <Paper
    className="shoppingCart"
    elevation={4}
    sx={{
      width: "250px",
      marginTop: "20px",
      display: {
        xs: "flex",
        sm: "flex",
        md: "none",
        lg: "none",
        xl: "none",
      },
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
    }}
  >
    <Button
      onClick={cartDrawer(true)}
      className="button"
      variant="contained"
      sx={{ height: "40px", width: { sm: "200px", xs: "200px" } }}
    >
      <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Open Cart
    </Button>
    <Drawer anchor="bottom" open={cartOpen} onClose={cartDrawer(false)}>
      <Box
        sx={{
          width: "100%",
          height: "420px",
          display: {xs: "grid", sm: "grid", md: "none", lg: "none", xl: "none"},
          placeItems: "center",
        }}
      >
        <Paper
          elevation={9}
          sx={{
            width: "80%",
            display: "flex",
            minWidth: "220px",
            height: "270px",
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
        <Paper
          elevation={8}
          sx={{
            width: "80%",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginLeft: "10px" }}
          >
            Total Price{" "}
            <span style={{ color: "#1976d2" }}>${totalPrice}</span>
          </Typography>
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              className="button"
              sx={{
                minWidth: "200px",
                width: "90%",
                marginTop: "10px",
              }}
              fullWidth
              variant="contained"
            >
              Checkout
            </Button>
          </div>
        </Paper>
      </Box>
    </Drawer>
  </Paper>
  )
}

export default OpenCart
