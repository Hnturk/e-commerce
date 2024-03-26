import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Account() {
  return (
    <Link
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
      href="/"
      underline="hover"
      color= "white"
    >
      <AccountCircle />
      <Typography variant="h6" color="white">
          Mehmet Han 
      </Typography>
    </Link>
  );
}

export default Account;