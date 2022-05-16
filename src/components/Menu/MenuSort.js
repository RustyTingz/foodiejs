import { useContext } from "react";
import MenuContext from "../../store/MenuProvider/menu-context";


const MenuSort = () => {
  const ctxMenu = useContext(MenuContext);

  const onSortMenu = (sortBy) => {
    ctxMenu.sortMenu(sortBy);
  };

  return (
    <>
      <button onClick={() => onSortMenu("name")}>Name</button>
      <button onClick={() => onSortMenu("category")}>Category</button>
      <button onClick={() => onSortMenu(undefined)}>RESET</button>
    </>
  );
};

export default MenuSort;