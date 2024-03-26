import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Wallet() {
  return (
    <Link
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
      href="#"
      underline="hover"
      color= "white"
    >
      <AccountBalanceWalletOutlinedIcon />
      <Typography variant="h6" color="white">
          $1200
      </Typography>
    </Link>
  );
}

export default Wallet;
