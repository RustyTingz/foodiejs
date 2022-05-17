
import { useContext } from "react";
import MenuContext from "../../store/MenuProvider/menu-context";
import { menuFilterFactory } from "../../store/MenuProvider/menuFiltering";

import classes from "./Menu.module.css";


const MenuFilters = () => {
  const ctxMenu = useContext(MenuContext);

  const onFilterMenu = (key, value) => {
    if (key) {
      let filter = menuFilterFactory(key, value);
      ctxMenu.filterMenu([filter]);
    } else {
      ctxMenu.filterMenu([]);
    }
  };

  return (
    <div>
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
