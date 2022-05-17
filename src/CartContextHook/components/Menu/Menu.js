import { useEffect } from "react";
import { useMenu } from "../../contexts/menu-context";
import classes from "./Menu.module.css";
import MenuItemCard from "./MenuItemCard";

const Menu = () => {
  const { menu, fetchMenu } = useMenu();
  
  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return (
    <section className={classes.menu}>
      {menu &&
        menu.map((menuItem) => (
          <MenuItemCard key={menuItem.sku} menuItem={menuItem} />
        ))}
    </section>
  );
};

export default Menu;
