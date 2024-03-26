// import React from 'react';
// import Button from '@mui/material/Button';
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
// function CartItem(props) {

//     const handleDecrease = () => {
//         const selectionD = "decrease";
//         props.onCountChange(props.id, selectionD);
//       };

//       const handleIncrease = () => {
//         const selectionI = "increase";
//         props.onCountChange(props.id, selectionI);
//       };

//   return (
//     <div className="cart-product">
//       <div className="product-info">
//         <div className="product-name">{props.name}</div>
//         <div className="product-price">{props.price}$</div>
//       </div>
//       <div className="product-count">
//         <Button className='decrease' variant="contained" onClick={handleDecrease} disabled={props.count === 0} ><RemoveCircleOutlineRoundedIcon/></Button>
//         <div className="count">{props.count}</div>
//         <Button className='increase' variant="contained" onClick={handleIncrease}><AddCircleOutlineRoundedIcon/></Button>

//       </div>
//     </div>
//   );
// }

// export default CartItem;

import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Divider from "@mui/material/Divider";

export default function ShoppingCart() {
  const [count, setCount] = useState(1);
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <Paper
      md={6}
      sx={{
        display: "flex",
        maxWidth: "50%",
        minWidth: "250px",
        height: 270,
        alignItems: "center",
      }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem
          secondaryAction={
            <IconButton
              disableRipple
              edge="end"
              sx={{ display: "flex", gap: 1 }}
            >
              <Button
                variant="string"
                sx={{ minWidth: 25, height: 25, padding: 0 }}
                onClick={handleDecrease}
                disabled={count === 0}
              >
                <RemoveCircleOutlineRoundedIcon color="primary" />
              </Button>
              {count}
              <Button
                variant="string"
                sx={{ minWidth: 25, height: 25, padding: 0 }}
                onClick={handleIncrease}
              >
                <AddCircleOutlineRoundedIcon color="primary" />
              </Button>

              {count > 0 ? (
                <Button
                  color="error"
                  sx={{ minWidth: 25, height: 25, padding: 0 }}
                >
                  <Divider orientation="vertical" />

                  <BackspaceOutlinedIcon sx={{ marginLeft: "5px" }} />
                </Button>
              ) : null}
            </IconButton>
          }
        >
          <ListItemText primary="Singlesada" secondary="Secondary text" />
        </ListItem>
      </List>
    </Paper>
  );
}
