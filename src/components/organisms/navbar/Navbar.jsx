import React from "react";
import SearchBar from "../../atoms/SearchBar";
import Account from "../../atoms/Account";
import Wallet from "../../atoms/Wallet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
function Navbar() {
  return (
    <Grid
    container
      style={{
        maxWidth: "100%",
        height: "70px",
        backgroundColor: "#1976d2",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Grid
        className="logo"
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "right",
          alignItems: "center",
          gap: "50px", 
        }}
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
      >
        <Link
        href = "/">
        <Typography variant="h4" color="white">
          Eteration
        </Typography>
        </Link>
        <SearchBar />
      </Grid>

      <Grid
        className="AccountI"
        style={{
          display: "flex",
          gap: "18px",
          minWidth: "300px",
          alignItems: "center",
          justifyContent: "center",

        }}
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
      >
        <Wallet />
        <Account />
      </Grid>
    </Grid>
  );
}

export default Navbar;
