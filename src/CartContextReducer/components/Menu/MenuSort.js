import { useMenu } from "../../contexts/menu-context";
import classes from "./Menu.module.css";

const MenuSort = () => {
  const { sortMenu } = useMenu();

  return (
    <div>
      <div className={classes["menu__action"]}>
        <button onClick={() => sortMenu("name")}>Name</button>
        <button onClick={() => sortMenu("category")}>Category</button>
        <button onClick={() => sortMenu(undefined)}>RESET</button>
      </div>
    </div>
  );
};

export default MenuSort;
