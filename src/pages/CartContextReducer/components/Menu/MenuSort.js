import { useContext } from "react";
import MenuContext from "../../store/MenuProvider/menu-context";
import classes from "./Menu.module.css";

const MenuSort = () => {
  const ctxMenu = useContext(MenuContext)

  return (
    <div>
      <div className={classes["menu__action"]}>
        <button onClick={() => ctxMenu.sortMenu("name")}>Name</button>
        <button onClick={() => ctxMenu.sortMenu("category")}>Category</button>
        <button onClick={() => ctxMenu.sortMenu(undefined)}>RESET</button>
      </div>
    </div>
  );
};

export default MenuSort;
