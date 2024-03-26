import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";

export default function ProductCard() {

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);    
  }

  function handleToggleClick() {
    navigate("/product");
  }

  return (
    <Card raised={true} sx={{ minWidth: "185px", height: "270px", width:"90%", padding: "10px"}} >
      <CardActionArea onClick={handleToggleClick}> 
        <CardMedia
          component="img"
          height="120"
          image="https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary" sx={{fontSize: "clamp(15px, 1.3vw, 22px)"}}>
            $1200
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a wi
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: "flex", justifyContent: "center", padding: 0}}>
      <Button 
          sx={{fontSize: "clamp(12px, 0.72vw, 15px)"}}
          size="medium" 
          color="primary" 
          variant={isClicked ? "outlined" : "contained" } 
          fullWidth={true} 
          onClick={handleClick}
          // disabled={isClicked}
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
