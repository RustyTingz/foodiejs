import MenuProvider from "../../store/MenuProvider/MenuProvider";
import Menu from "./Menu";
import MenuFilters from "./MenuFilter";
import MenuSort from "./MenuSort";
import MenuSummary from "./MenuSummary";

const MenuContainer = () => {
  return (
    <MenuProvider>
      <MenuSummary />
      <MenuFilters />
      <MenuSort />
      <Menu />
    </MenuProvider>
  );
};

export default MenuContainer;
