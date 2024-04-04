import React from "react";
import SearchBar from "../../atoms/SearchBar";
import Account from "../../atoms/Account";
import Wallet from "../../atoms/Wallet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import MenuIcon from '@mui/icons-material/Menu';
import "../../../style/components/atoms/SearchBar-min.css";
import "../../../style/components/atoms/NavbarIcons-min.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from '@mui/material/MenuItem';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
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
        xs={0}
        sm={3.5}
        md={3}
        lg={2.8}
        xl={2.6}
      >
        <Link underline="none" href="/" sx={{display: {xs: "none", sm: "block", md: "block", lg: "block", xl: "block"}}}>
          <Typography className="brand" variant="h4" color="white">
            Eteration
          </Typography>
        </Link>
      </Grid>
      <Grid xs={9} 
            sm={5} 
            md={4.5} 
            lg={6} 
            xl={5.6} 
            sx={{ display: "flex", alignItems: "center", justifyContent: {xl: "flex-start", lg: "center", md: "center", sm: "center", xs: "flex-start"}, paddingLeft: {xl: "12px", lg: "0px"}}}>
        <SearchBar />
      </Grid>

      <Grid
        className="AccountI"
        style={{
          display: "flex",
          gap: "18px",
          minWidth: {sm: "100px", md: "250px", lg: "250px", xl: "250px"},
          alignItems: "center",
          justifyContent: "center",
          marginRight: "10px",
        }}
        xs={2}
        sm={2.5}
        md={3.5}
        lg={3}
        xl={3.6}
      >
        <div style={{display: {xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }, }}>
      <Button
        sx={{minWidth: {xs: "64xp", sm: "0px", md: "0px", lg: "0px", xl: "0px"}}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none" }, color: "white", height: "40px", width: "40px"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{height: "50px", width: "120px"}} onClick={handleClose}> <AccountCircle sx={{marginRight: "10px"}} color="primary"/>Profile</MenuItem>
        <MenuItem sx={{height: "50px"}} onClick={handleClose}>  <AccountBalanceWalletOutlinedIcon sx={{marginRight: "10px"}} color="primary"/> My account</MenuItem>
      </Menu>
      </div>
        
        <Wallet />
        <Account />
      </Grid>
    </Grid>
  );
}

export default Navbar;
