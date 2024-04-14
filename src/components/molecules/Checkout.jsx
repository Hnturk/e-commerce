import {  useContext } from "react";
import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext.jsx";
function Checkout() {
  const { totalPrice } = useContext(CarContext);

  return (
    <Paper
      data-testid = "checkout"
      elevation={6}
      sx={{ minWidth: "220px", width: "50%", height: "100px" }}
    >
      <Typography data-testid="checkout-text"  variant="h6" gutterBottom sx={{ marginLeft: "10px" }}>
        Total Price <span style={{ color: "#1976d2" }}>${totalPrice}</span>
      </Typography>
      <Divider variant="middle" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          data-testid="checkout-button"
          className="button"
          sx={{ minWidth: "200px", width: "90%", marginTop: "10px" }}
          fullWidth
          variant="contained"
        >
          Checkout
        </Button>
      </div>
    </Paper>
  );
}

export default Checkout;
