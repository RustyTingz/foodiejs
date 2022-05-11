import Modal from '../Core/Modal';
import classes from './Cart.module.css';
import CartItems from './CartItems';

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <CartItems items={props.items} />
      <div className={classes.total}>{props.total}</div>
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
