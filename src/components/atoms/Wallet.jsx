import { React, useContext } from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CarContext from "../../contexts/CarContext";

function Wallet() {
  const { totalPrice } = useContext(CarContext);

  return (
    <Link
      className="icon"
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
        alignItems: "center",
        gap: 1,
      }}
      href="#"
      underline="none"
      color="#fff"
    >
      <AccountBalanceWalletOutlinedIcon />
      <Typography variant="h6" color="white">
        ${totalPrice}
      </Typography>
    </Link>
  );
}

export default Wallet;
