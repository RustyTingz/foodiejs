import { useEffect, useState } from "react";
import { menuApi } from "../../api/menuApi";
import classes from "./Menu.module.css";
import MenuItemCard from "./MenuItemCard";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    menuApi.getMenu().then((r) => setMenu(r));
  }, []);

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
