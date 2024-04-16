import { useContext, useState, useEffect } from "react";
import React from "react";
import Card from "../../../../components/molecules/Card.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import CarContext from "../../../../contexts/CarContext.jsx";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopBar from "../../../../components/organisms/container/containerContent/ShopBar.jsx";
import Drawer from "@mui/material/Drawer";
import FilterBar from "../../../../components/organisms/container/containerContent/FilterBar.jsx";
function MainContent() {
  const { carData, isLoading } = useContext(CarContext);

  const [cartOpen, setCartOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  function handleChange(event, value) {
    setCurrentPage(value);
  }

  const cartDrawer = (newOpen) => () => {
    setCartOpen(newOpen);
  };

  const filterDrawer = (newOpen) => () => {
    setFilterOpen(newOpen);
  };

  useEffect(() => {
    if (
      currentPage !== 1 &&
      currentPage > Math.ceil(carData?.length / itemsPerPage)
    ) {
      setCurrentPage(Math.ceil(carData?.length / itemsPerPage));
    }
  }, [currentPage, carData?.length]);
  const currentItems = carData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div
      data-testid="main-content"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          display: isLoading ? "none" : { md: "none", xs: "flex" },
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80px",
          width: { sm: "95%", xs: "90%" },
          marginTop: "20px",
        }}
        elevation={4}
      >
        <div>
          <Button
            data-testid="filter-drawer-button"
            onClick={filterDrawer(true)}
            className="button"
            variant="contained"
            sx={{ height: "60px", width: { sm: "200px", xs: "150px" } }}
          >
            <FilterAltIcon sx={{ marginRight: "5px" }} /> Filter
          </Button>
          <Drawer
            data-testid="filter-drawer"
            open={filterOpen}
            onClose={filterDrawer(false)}
          >
            <FilterBar style={{ width: "250px" }} />
          </Drawer>
        </div>
        <Button
          data-testid="cart-drawer-button"
          onClick={cartDrawer(true)}
          className="button"
          variant="contained"
          sx={{ height: "60px", width: { sm: "200px", xs: "150px" } }}
        >
          <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Open Cart
        </Button>
        <Drawer
          data-testid="cart-drawer"
          anchor="right"
          open={cartOpen}
          onClose={cartDrawer(false)}
        >
          <ShopBar />
        </Drawer>
      </Paper>
      {isLoading ? (
        <>
          <CircularProgress />
          <div>Loading...</div>
        </>
      ) : (
        <Grid
          sx={{
            width: { xs: "80%", sm: "85%", md: "100%", lg: "100%", xl: "100%" },
            maxHeight: "100%",
            margin: 0,
            padding: 0,
            marginTop: "12px",
            display: "flex",
            rowGap: "20px",
          }}
          container
        >
          {currentItems?.map((item) => (
            <Grid
              key={item.id}
              sx={{
                minWidth: "185px",
                height: "260px",
                margin: 0,
                padding: 0,
                display: "grid",
                placeItems: "center",
              }}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              {item && <Card key={item?.id} car={item} />}
            </Grid>
          ))}
        </Grid>
      )}
      {currentItems.length !== 0 ? (
        <Paper
          elevation={4}
          sx={{
            display: isLoading ? "none" : "flex",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              data-testid="pagination"
              color="primary"
              count={Math.ceil(carData?.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChange}
              disabled={isLoading}
            />
          </Stack>
        </Paper>
      ) : (
        <div style={{ display: isLoading ? "none" : "block" }}>
          <h1>Product not found</h1>
        </div>
      )}
    </div>
  );
}

export default MainContent;
