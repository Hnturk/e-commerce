import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import FilterBar from "./containerContent/FilterBar";
import MainContent from "./containerContent/MainContent";
import ShopBar from "./containerContent/ShopBar";
import "../../../style/components/molecules/Card-min.css"

function Container() {
  return (
    <Grid sx={{ height: "calc(100vh - 77px)" }} container>
      <Grid
        sx={{ display: { md:"flex", xs:"none" }, padding: 0 }}
        xs={0}
        sm={0}
        md={3.1}
        lg={2.7}
        xl={2.7}
      >
        <FilterBar />
      </Grid>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 0,
          gap: "20px"
        }}
        xs={12}
        sm={12}
        md={5.6}
        lg={6.6}
        xl={6.6}
      >
        <MainContent />
      </Grid>
      <Grid
        sx={{ display: { xs: "block" }, padding: 0 }}
        xs={false}
        sm={0}
        md={3.3}
        lg={2.7}
        xl={2.7}
      >
        <ShopBar />
      </Grid>
    </Grid>
  );
}

export default Container;
