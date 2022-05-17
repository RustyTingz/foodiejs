import { useCart } from "../../contexts/cart-context";
import Modal from "../Core/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  const { cartItems, totalAmount } = useCart();

  return (
    <Modal onClose={props.onClose}>
      <CartItems items={cartItems} />
      <div className={classes.total}>{totalAmount}</div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
