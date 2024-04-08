import { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import CarContext from "../../contexts/CarContext";
import PropTypes from "prop-types";

export default function CartItem({ item }) {
  CartItem.propTypes = {
    item: PropTypes.object.isRequired,
  };

  const { cartProducts, setCartProducts, setTotalPrice } =
    useContext(CarContext);

  const handleIncrease = (productID) => {
    const updatedList = cartProducts.map((product) =>
      product.id === productID
        ? { ...product, count: product.count + 1 }
        : product
    );

    const totalPrice = updatedList.reduce(
      (acc, { price, count }) => acc + price * count,
      0
    );

    setTotalPrice(totalPrice);
    setCartProducts(updatedList);
  };

  const handleDecrease = (productID) => {
    const updatedList = cartProducts
      .map((product) => {
        if (product.id === productID) {
          return product.count - 1 <= 0
            ? undefined
            : { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      })
      .filter((product) => product !== undefined);

    const totalPrice = updatedList.reduce(
      (acc, { price, count }) => acc + price * count,
      0
    );

    setTotalPrice(totalPrice);
    setCartProducts(updatedList);
  };

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
