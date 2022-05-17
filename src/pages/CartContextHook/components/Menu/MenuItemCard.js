import CartAddButton from '../Cart/CartAddButton';
import classes from "./MenuItemCard.module.css";

const MenuItemCard = ({ menuItem }) => {
  //  const price = `£${meal.price.toFixed(2)}`;

  return (
    <div className={classes["menu-item"]}>
      <div className={classes["menu-item__media"]}>
        <div className={classes["menu-item__thumbnail"]}>
          <img
            src={menuItem.image}
            alt={`${menuItem.name}, ${menuItem.description}`}
          />
        </div>
      </div>
      <div className={classes["menu-item__content"]}>
        <h3 className={classes["menu-item__title"]}>{menuItem.name}</h3>
        <p className={classes["menu-item__description"]}>
          {menuItem.description}
        </p>
        <span>{menuItem.price}</span>
      </div>
      <div className={classes["menu-item__actions"]}>
        <CartAddButton
          id={menuItem.id}
          sku={menuItem.sku}
          item={menuItem}
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
