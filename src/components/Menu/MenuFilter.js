import { useMenu } from "../../contexts/menu-context";
import { menuFilterFactory } from "../../contexts/menu-context/useMenu";
import classes from "./Menu.module.css";


const MenuFilters = () => {
  const { filters, filterMenu } = useMenu();
  const onFilterMenu = (key, value) => {
    if (key) {
      let filter = menuFilterFactory(key, value);
      filterMenu([filter]);
    } else {
      filterMenu([]);
    }
  };

  return (
    <div>
      {filters && (
        <div>
          Filtered by: {filters.map((filter) => filter.value).join(", ")}
        </div>
      )}
      <div className={classes["menu__action"]}>
        <button onClick={() => onFilterMenu("category", "Pizza")}>Pizza</button>
        <button onClick={() => onFilterMenu("category", "Sides")}>Sides</button>
        <button onClick={() => onFilterMenu("category", "Desserts")}>
          Desserts
        </button>
        <button onClick={() => onFilterMenu("category", "Drinks")}>
          Drinks
        </button>
        <button onClick={() => onFilterMenu(undefined)}>CLEAR</button>
      </div>
    </div>
  );
};

export default MenuFilters;
