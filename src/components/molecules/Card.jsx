import * as React from 'react';
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";
import CarContext from '../../contexts/CarContext';

export default function ProductCard({ car }) {

  const { addToCart } = useContext(CarContext);

  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);    
    addToCart(car.price, car?.name, car.count, car.id)
  }

  function handleToggleClick() {
    navigate("/product");
  }

  return (
    <Card raised={true} className='card'>
      <CardActionArea onClick={handleToggleClick}> 
        <CardMedia
          component="img"
          height="120"
          image={car?.image}
        />
        <CardContent>
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
