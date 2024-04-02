import {React, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProductDetail from "./containerProduct/ProductDetail";
import ShopBar from "./containerContent/ShopBar";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function ProductContainer() {

  const [cartOpen, setCartOpen] = useState(false);
  const cartDrawer = (newOpen) => () => {
    setCartOpen(newOpen);
  };

  return (
    <Grid sx={{ height: "calc(100vh - 77px)", display: "flex", flexDirection: {xs: "column", sm: "column", md: "row-reverse", lg: "row-reverse", xl: "row-reverse"}, bgcolor: "purple" }} container>

      <Grid  sx={{ padding: 0,}} xs={12} sm={12} md={4} lg={2.7} xl={2.7}>
        <Paper className="shoppingCart"  elevation={4} sx={{width: "250px", display: {xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none"}, alignItems: "center", padding: "10px"}}>
        <Button
          onClick={cartDrawer(true)}
          className="button"
          variant="contained"
          sx={{ height: "40px", width: { sm: "200px", xs: "200px" } }}
        >
          <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Open Cart
        </Button>
        <Drawer  anchor="bottom" open={cartOpen} onClose={cartDrawer(false)}>
          <ShopBar />
        </Drawer>
        </Paper>
      <Grid sx={{display: {xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex"}}}>
          <ShopBar/>
      </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 0,
          bgcolor: "green",
          height: "calc(100vh - 160px)",
        }}
        xs={12}
        sm={12}
        md={8}
        lg={9.3}
        xl={9.3}
      >
        <ProductDetail />
      </Grid>

    </Grid>
  );
}

export default ProductContainer;
