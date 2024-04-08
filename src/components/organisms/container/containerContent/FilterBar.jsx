import React from "react";
import BrandFilter from "../../../molecules/BrandFilter";
import SortFilter from "../../../molecules/SortFilter";
import ModelFilter from "../../../molecules/ModelFilter";
import Grid from "@mui/material/Unstable_Grid2";
function FilterBar() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "center",
          sm: "center",
          md: "flex-end",
          lg: "center",
          xl: "flex-end",
        },
        justifyContent: "flex-start",
        height: "100%",
        width: { xs: "250px", sm: "250px", md: "100%", lg: "100%", xl: "100%" },
        gap: 3,
        margin: 0,
        paddingRight: "10px",
        paddingTop: "20px",
        padding: { md: "12px 0", lg: "10px 20px" },
      }}
      spacing={3}
    >
      <SortFilter />
      <BrandFilter />
      <ModelFilter />
    </Grid>
  );
}

export default FilterBar;
