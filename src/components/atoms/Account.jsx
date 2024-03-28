import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Account() {
  return (
    <Link
    className="icon"
      sx={{ gap: 1, }}
      href="/"
      underline="none"
      color= "#fff"
    >
      <AccountCircle />
      <Typography variant="h6" color="white">
          Mehmet Han 
      </Typography>
    </Link>
  );
}

export default Account;