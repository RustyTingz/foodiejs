import classes from './Cart.module.css';


const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <h3>Cart</h3>
      <ol className={classes['cart__items']}>
        {props.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
      <div className={classes.total}></div>
      <div className={classes.actions}></div>

      <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  );
};

export default Cart;
