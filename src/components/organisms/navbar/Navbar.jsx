import React from "react";
import SearchBar from "../../atoms/SearchBar";
import Account from "../../atoms/Account";
import Wallet from "../../atoms/Wallet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import "../../../style/components/atoms/SearchBar-min.css";
import "../../../style/components/atoms/NavbarIcons-min.css";
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
          paddingRight: "50px",

        }}
        xs={6}
        sm={6}
        md={8.6}
        lg={2.7}
        xl={2.7}
      >
        <Link underline="none" href="/">
          <Typography className="brand" variant="h4" color="white">
            Eteration
          </Typography>
        </Link>
      </Grid>
      <Grid xs={6} sm={6} md={8.6} lg={5.7} xl={5.7} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", paddingLeft: "12px"}}>
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
        md={3.4}
        lg={3.6}
        xl={3.6}
      >
        <Wallet />
        <Account />
      </Grid>
    </Grid>
  );
}

export default Navbar;
