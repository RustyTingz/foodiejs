import CartAddButton from '../Cart/CartAddButton';
import classes from './Meal.module.css';


const Meal = ({ meal }) => {
  const price = `£${meal.price.toFixed(2)}`;

  return (
    <div className={classes.meal}>
      <div className={classes['meal__media']}>
        <div className={classes['meal__thumbnail']}>
          <img src={meal.image} alt={`${meal.name}, ${meal.description}`} />
        </div>
      </div>
      <div className={classes['meal__content']}>
        <h3 className={classes['meal__title']}>{meal.name}</h3>
        <p className={classes['meal__description']}>{meal.description}</p>
        <span>{price}</span>
      </div>
      <div className={classes['meal__actions']}>
        <CartAddButton id={meal.id} meal={meal} />
      </div>
    </div>
  );
};

export default Meal;
