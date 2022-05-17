import { useCart } from "../../contexts/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const { cartItemCount } = useCart();

  return (
    <button className={classes.button} onClick={props.onCartShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.label}</span>
      <span className={classes.badge}>{cartItemCount }</span>
    </button>
  );
};

export default HeaderCartButton;
