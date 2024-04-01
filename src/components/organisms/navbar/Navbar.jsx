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
          display: "grid",
          placeItems: "center",
          justifyContent: {xl: "right", lg: "center"},
          alignItems: "center",
          paddingRight: {xl: "50px", lg: "0px"},
        }}
        xs={6}
        sm={6}
        md={3}
        lg={2.8}
        xl={2.7}
      >
        <Link underline="none" href="/">
          <Typography className="brand" variant="h4" color="white">
            Eteration
          </Typography>
        </Link>
      </Grid>
      <Grid xs={6} 
            sm={6} 
            md={4.5} 
            lg={6} 
            xl={5.7} 
            sx={{ display: "flex", alignItems: "center", justifyContent: {xl: "flex-start", lg: "center", md: "center"}, paddingLeft: {xl: "12px", lg: "0px"}}}>
        <SearchBar />
      </Grid>

      <Grid
        className="AccountI"
        style={{
          display: "flex",
          gap: "18px",
          minWidth: "250px",
          alignItems: "center",
          justifyContent: "center",
          
        }}
        xs={0}
        sm={0}
        md={3.5}
        lg={3}
        xl={3.6}
      >
        <Wallet />
        <Account />
      </Grid>
    </Grid>
  );
}

export default Navbar;
