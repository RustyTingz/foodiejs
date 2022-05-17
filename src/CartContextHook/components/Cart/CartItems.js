import classes from "./Cart.module.css"

const CartItems = props => {
  
  return (
    <ol className={classes["cart__items"]}>
      {props.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ol>
  );
}

export default CartItems;