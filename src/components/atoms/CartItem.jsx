import { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Divider from "@mui/material/Divider";
import CarContext from "../../contexts/CarContext";

export default function CartItem({ item }) {
  const { cartProducts, setCartProducts, setTotalPrice } =
    useContext(CarContext);

  function handleIncrease(productID) {
    const updatedList = cartProducts.map((object) =>
      object.id === productID ? { ...object, count: object.count + 1 } : object,
    );

    const totalPrice = updatedList.reduce(
      (acc, { price, count }) => acc + price * count,
      0,
    );

    setTotalPrice(totalPrice);
    setCartProducts(updatedList);
  }

  function handleDecrease(productID) {
    const updatedList = cartProducts
      .map((object) =>
        object.id === productID
          ? object.count - 1 <= 0
            ? undefined
            : { ...object, count: object.count - 1 }
          : object,
      )
      .filter((object) => object !== undefined);

    const totalPrice = updatedList.reduce(
      (acc, { price, count }) => acc + price * count,
      0,
    );

    setTotalPrice(totalPrice);
    setCartProducts(updatedList);
  }

  return (
    <List sx={{ padding: 0 }}>
      <ListItem
        secondaryAction={
          <IconButton disableRipple edge="end" sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="string"
              sx={{ minWidth: 25, height: 25, padding: 0 }}
              onClick={() => handleDecrease(item.id)}
              disabled={item?.count === 0}
            >
              <RemoveCircleOutlineRoundedIcon color="primary" />
            </Button>
            {item?.count}
            <Button
              variant="string"
              sx={{ minWidth: 25, height: 25, padding: 0 }}
              onClick={() => handleIncrease(item.id)}
            >
              <AddCircleOutlineRoundedIcon color="primary" />
            </Button>
            {/* <Divider orientation="vertical" flexItem /> */}
            {/* {count > 0 ? (
                <Button
                  color="error"
                  sx={{ minWidth: 25, height: 25, padding: 0 }}
                >
                  <BackspaceOutlinedIcon />
                </Button>
              ) : null} */}
          </IconButton>
        }
      >
        <ListItemText
          primaryTypographyProps={{ sx: { width: "100px" } }}
          primary={item?.name}
          secondary={item?.price}
        />
      </ListItem>
    </List>
  );
}
