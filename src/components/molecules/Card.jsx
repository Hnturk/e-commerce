import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import CarContext from "../../contexts/CarContext";
import PropTypes from "prop-types";

export default function ProductCard({ car }) {
  ProductCard.propTypes = {
    car: PropTypes.object.isRequired,
  };

  const { addToCart, cartProducts, getProduct } = useContext(CarContext);

  const navigate = useNavigate();

  const isClicked = cartProducts.find((e) => e.id === car?.id) || false;

  function handleClick() {
    addToCart(car?.price, car?.name, car?.count, car?.id);
  }

  function handleToggleClick() {
    if (car) {
      navigate("/product");
      getProduct(car?.image, car?.name, car?.price, car?.description, car?.id);
    }
  }

  return (
    <Card raised={true} className="card">
      <CardActionArea onClick={handleToggleClick}>
        <CardMedia
          component="img"
          height="120"
          image={car?.image}
          loading="lazy"
        />
        <CardContent sx={{ padding: "16px 5px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary"
            sx={{ fontSize: "clamp(15px, 1.3vw, 22px)" }}
          >
            {car?.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ display: "flex", justifyContent: "center", padding: 0 }}
      >
        <Button
          className={isClicked ? "" : "button"}
          sx={{ fontSize: "clamp(12px, 0.72vw, 15px)" }}
          size="medium"
          disabled={isClicked}
          variant={isClicked ? "outlined" : "contained"}
          fullWidth={true}
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
    </Card>
  );
}
