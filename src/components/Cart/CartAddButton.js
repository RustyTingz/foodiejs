import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Input from '../Core/Input';
import classes from './CartAddButton.module.css';

const CartAddButton = (props) => {
  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(CartContext)

  const onCartAddHandler = (e) => {
    e.preventDefault();
    ctx.addItem({
      ...props.meal,
      quantity: quantity
    })
  } 

  return (
    <form className={classes['cart__add']} onSubmit={onCartAddHandler }>
      <Input
        label="Quantity"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
        value={quantity}
        onChange={(e) => setQuantity(e.current.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default CartAddButton;
