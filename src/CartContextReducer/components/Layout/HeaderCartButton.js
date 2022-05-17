import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import CartIcon from "./../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.length;

  return (
    <button className={classes.button} onClick={props.onCartShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.label}</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
