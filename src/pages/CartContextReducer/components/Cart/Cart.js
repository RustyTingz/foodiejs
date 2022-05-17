import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../Core/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  return (
    <Modal onClose={props.onClose}>
      <CartItems items={ctx.items} />
      <div className={classes.total}>{ctx.amount}</div>
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
