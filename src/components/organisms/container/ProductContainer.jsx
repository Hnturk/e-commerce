import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import ProductDetail from './containerProduct/ProductDetail';
import ShopBar from "./containerContent/ShopBar";

function ProductContainer() {
  return (
    <Grid sx={{ height: "calc(100vh - 77px)" }} container>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 0,
        }}
        xs={12}
        sm={12}
        md={8}
        lg={9.3}
        xl={9.3}  
      >
        <ProductDetail />
      </Grid>
      <Grid
        sx={{padding: 0}}
        xs={false}
        sm={0}
        md={4}
        lg={2.7}
        xl={2.7}
      >
        <ShopBar />
      </Grid>
    </Grid>
  )
}

export default ProductContainer
