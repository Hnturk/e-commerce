import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ShoppingCart from "../../../molecules/ShoppingCart";
import Checkout from "../../../molecules/Checkout";
function ShopBar() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        height: "100%",
        margin: 0,
        paddingLeft: "10px",
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: { md: "center", xl: "start" },
      }}
    >
      <ShoppingCart />
      <Checkout />
    </Grid>
  );
}

export default ShopBar;
