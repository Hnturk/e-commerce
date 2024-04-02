import {React, useContext} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import FilterBar from "./containerContent/FilterBar";
import MainContent from "./containerContent/MainContent";
import ShopBar from "./containerContent/ShopBar";
import "../../../style/components/molecules/Card-min.css"
import CarContext from "../../../contexts/CarContext";

function Container() {

  const { isLoading } = useContext(CarContext);

  return (
    <Grid sx={{ height: "calc(100vh - 77px)" }} container>
      <Grid
        sx={{ display: { md:"flex", xs:"none" }, padding: 0 }}
        xs={0}
        sm={0}
        md={2.75}
        lg={2.5}
        xl={2.7}
      >
        <FilterBar />
      </Grid>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isLoading ? "center" : "flex-start",
          flexDirection: "column",
          padding: 0,
          gap: "20px"
        }}
        xs={12}
        sm={12}
        md={6.1}
        lg={7}
        xl={6.6}
      >
        <MainContent />
      </Grid>
      <Grid
      
        sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }, padding: 0}}
        xs={false}
        sm={0}
        md={3.15}
        lg={2.5}
        xl={2.7}
      >
        <ShopBar />
      </Grid>
    </Grid>
  );
}

export default Container;
