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
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../../style/components/organisms/container/containerProduct/ProductDetail-min.css";

function ProductContainer() {

  const [cartOpen, setCartOpen] = useState(false);
  const cartDrawer = (newOpen) => () => {
    setCartOpen(newOpen);
  };

  return (
    <Grid sx={{ height: "calc(100vh - 77px)" }} container>

<Grid sx={{ padding: 0 }} xs={12} sm={0} md={4} lg={2.7} xl={2.7}>
        {/* < style={{ display: {} }}></> */}
        {/* <Button
          
          onClick={cartDrawer(true)}
          className="button"
          variant="contained"
          sx={{ height: "40px", width: { sm: "200px", xs: "200px" } }}
        >
          <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Open Cart
        </Button>
        <Drawer anchor="bottom" open={cartOpen} onClose={cartDrawer(false)}>
          <ShopBar />
        </Drawer> */}
      </Grid>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 0,
          bgcolor: "green",
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
