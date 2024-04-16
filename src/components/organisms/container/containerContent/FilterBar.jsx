import React from "react";
import BrandFilter from "../../../molecules/BrandFilter.jsx";
import SortFilter from "../../../molecules/SortFilter.jsx";
import ModelFilter from "../../../molecules/ModelFilter.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import CarContext from "../../../../contexts/CarContext.jsx";
function FilterBar() {
  const {
    carData,
    data,
    setCarData,
    setSelectedModels,
    setSelectedBrands,
    setSelectedValue,
    setQuery,
  } = React.useContext(CarContext);
  const handleClick = () => {
    setCarData(data);
    setQuery("");
    setSelectedModels(new Set());
    setSelectedBrands(new Set());
    setSelectedValue("");
  };
  return (
    <Grid
      data-testid="filter-bar"
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
      {JSON.stringify(carData) !== JSON.stringify(data) ? (
        <Button
          sx={{ minWidth: "190px", width: "50%" }}
          variant="contained"
          onClick={handleClick}
        >
          Clear Filters
        </Button>
      ) : null}
    </Grid>
  );
}

export default FilterBar;
