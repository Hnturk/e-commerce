import { React,  useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProductDetail from "./containerProduct/ProductDetail";
import ShopBar from "./containerContent/ShopBar";
import CarContext from "../../../contexts/CarContext";
import OpenCart from "../../molecules/OpenCart";

function ProductContainer() {

  const { product } = useContext(CarContext);

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
          <OpenCart />

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
