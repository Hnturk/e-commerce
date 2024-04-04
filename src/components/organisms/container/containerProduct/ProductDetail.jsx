import React from "react";
import { useContext } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import CarContext from "../../../../contexts/CarContext";
function ProductDetail({ car }) {
  const { addToCart, cartProducts } = useContext(CarContext);

  const isClicked = cartProducts.find((e) => e.id === car.id) ? true : false;

  function handleClick() {
    addToCart(car?.price, car?.name, car?.count, car?.id);
  }

  return (
    <Card
      raised={true}
      sx={{
        minWidth: "185px",
        width: { xs: "80%", sm: "500px", md: "500px", lg: "90%", xl: "90%" },
        maxWidth: "900px",
        height: { xs: "90%", sm: "80%", md: "80%", lg: "70%", xl: "70%" },
        maxHeight: "770px",
        padding: "10px",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "49.5%",
            xl: "49.5%",
          },
          height: { xs: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" },
                 }}
      >
        <CardMedia
          component="img"
          sx={{
            height: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            },
          }}
          image={car?.image}
          loading="eager"
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "49.5%",
            xl: "49.5%",
          },
          height: { xs: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" },
        }}
      >
        <CardContent
          sx={{ padding: "16px 5px",   height: "85%" }}
        >
          <Typography variant="h5" color="text.secondary" sx={{ fontSize: {
                xs: "22px",
                sm: "22px",
                md: "24px",
                lg: "28px",
                xl: "28px",
              } }}>
            {car?.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="Box" color="primary"  sx={{ fontSize: {
                xs: "22px",
                sm: "22px",
                md: "24px",
                lg: "28px",
                xl: "28px",
              } }}>
            {car?.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflowY: "auto",
                           maxHeight: {
                xs: "196px",
                sm: "155px",
                md: "155px",
                lg: "540px",
                xl: "540px",
              },
              fontSize: {
                xs: "15px",
                sm: "15px",
                md: "15px",
                lg: "16px",
                xl: "16px",
              },
            }}
          >
            {car?.description}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
            height: "15%",
          }}
        >
          <Button
            className={isClicked ? "" : "button"}
            sx={{
              width: {
                xs: "300px",
                sm: "400px",
                md: "400px",
                lg: "370px",
                xl: "370px",
              },
              height: {
                xs: "30px",
                sm: "40px",
                md: "40px",
                lg: "60px",
                xl: "60px",
              },
            }}
            size="medium"
            disabled={isClicked}
            variant={isClicked ? "outlined" : "contained"}
            onClick={handleClick}
          >
            {isClicked ? (
              <>
                Added to cart{" "}
                <CheckCircleOutlineIcon
                  style={{ animation: "spin 0.5s", marginLeft: "5px" }}
                />
              </>
            ) : (
              "Add to cart"
            )}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default ProductDetail;
