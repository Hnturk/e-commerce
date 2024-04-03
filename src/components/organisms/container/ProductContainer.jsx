import { React, useState, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProductDetail from "./containerProduct/ProductDetail";
import ShopBar from "./containerContent/ShopBar";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartItem from "../../atoms/CartItem";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CarContext from "../../../contexts/CarContext";
import Checkout from "../../molecules/Checkout";

function ProductContainer() {
  const { product, totalPrice, cartProducts } = useContext(CarContext);

  const [cartOpen, setCartOpen] = useState(false);

  const cartDrawer = (newOpen) => () => {
    setCartOpen(newOpen);
  };

  return (
    <Grid
      sx={{
        height: "calc(100vh - 77px)",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row-reverse",
          lg: "row-reverse",
          xl: "row-reverse",
        },
      }}
      container
    >
      <Grid sx={{ padding: 0 }} xs={12} sm={12} md={3} lg={2.7} xl={2.7}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
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
                  display: "grid",
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
        </Grid>
        <Grid
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <ShopBar />
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          flexDirection: "column",
          marginTop: {
            xs: "1px",
            sm: "1px",
            md: "25px",
            lg: " 25px",
            xl: "25px",
          },
          padding: 0,
          height: "calc(100vh - 200px)",
        }}
        xs={12}
        sm={12}
        md={9}
        lg={9.3}
        xl={9.3}
      >
        <ProductDetail car={product} />
      </Grid>
    </Grid>
  );
}

export default ProductContainer;
