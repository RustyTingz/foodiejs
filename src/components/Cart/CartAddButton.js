import Input from '../Core/Input';
import classes from './CartAddButton.module.css';

const CartAddButton = (props) => {
  return (
    <form className={classes['cart__add']}>
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
      />
      <button>Add</button>
    </form>
  );
};

export default CartAddButton;
