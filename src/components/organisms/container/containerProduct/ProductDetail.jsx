import React from "react";
import { useState, useContext } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CarContext from "../../../../contexts/CarContext";
function ProductDetail({ car }) {
  const { addToCart, cartProducts} = useContext(CarContext);
 

  const isClicked = cartProducts.find((e) => e.id === car.id) ? true : false;

  function handleClick() {
    addToCart(car.price, car?.name, car.count, car.id)
  }
  return (

 <Card raised={true} sx={{ minWidth: "185px", height: "470px", width: "80%", padding: "10px" }}>
      <CardActionArea > 
        <CardMedia
          component="img"
          height="220px"
          image={car?.image}
          loading="eager"
        />
        <CardContent sx={{ padding: "16px 5px"}}>
          <Typography gutterBottom variant="h5" component="div" color="primary" sx={{fontSize: "clamp(15px, 1.3vw, 22px)", }}>
            {car?.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: "flex", justifyContent: "center", padding: 0}}>
      <Button 
          className={isClicked ? "" : "button" } 
          sx={{fontSize: "clamp(12px, 0.72vw, 15px)"}}
          size="medium" 
          disabled={isClicked}
          variant={isClicked ? "outlined" : "contained" } 
          fullWidth={true} 
          onClick={handleClick}
        >
          {isClicked ? (
            <>
              Added to cart <CheckCircleOutlineIcon style={{ animation: "spin 0.5s" , marginLeft: "5px"}}/>
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
  


export default ProductDetail;
