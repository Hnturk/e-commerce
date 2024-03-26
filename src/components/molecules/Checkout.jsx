import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
function Checkout() {
  return (
    <Paper elevation={6} sx={{ minWidth: "250px", width: "50%", height: "100px" }}>
      <Typography variant="h6" gutterBottom sx={{ marginLeft: "10px" }}>
        Total Price <span style={{ color: "#1976d2" }}>${12000}</span>
      </Typography>
      <Divider variant="middle" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ minWidth: "200px", width: "90%",  marginTop: "10px" }}
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

