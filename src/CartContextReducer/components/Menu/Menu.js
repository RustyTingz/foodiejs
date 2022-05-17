import { useContext } from "react";
import MenuContext from "../../store/MenuProvider/menu-context";
import classes from "./Menu.module.css";
import MenuItemCard from "./MenuItemCard";

const Menu = () => {
  const menuCtx = useContext(MenuContext)

  return (
    <section className={classes.menu}>
      {menuCtx.menu &&
        menuCtx.menu.map((menuItem) => (
          <MenuItemCard key={menuItem.id} menuItem={menuItem} />
        ))}
    </section>
  );
};

export default Menu;
