import { useContext } from "react";
import MenuContext from "../../store/MenuProvider/menu-context";


const MenuFilters = () => {
  const ctxMenu = useContext(MenuContext)

  const onFilterMenu = (filter) => {
    if (filter === undefined) {
      ctxMenu.filterMenu(filter)
    } else {
      ctxMenu.filterMenu({ field: "category", value: filter });      
    }
  }

  return (
    <>
      <button onClick={() => onFilterMenu("Pizza")}>Pizza</button>
      <button onClick={() => onFilterMenu("Sides")}>Side</button>
      <button onClick={() => onFilterMenu("Desserts")}>Desert</button>
      <button onClick={() => onFilterMenu("Drinks")}>Drinks</button>
      <button onClick={() => onFilterMenu(undefined)}>CLEAR</button>
    </>
  );
}

export default MenuFilters;