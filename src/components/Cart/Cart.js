import Modal from "../Core/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {

  return (
    <Modal onClose={props.onClose}>
      <CartItems items={[]} />
      <div className={classes.total}>{0.00}</div>
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
