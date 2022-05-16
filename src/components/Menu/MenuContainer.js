import Menu from "./Menu";
import MenuFilters from "./MenuFilter";
import MenuSort from "./MenuSort";
import MenuSummary from "./MenuSummary";

const MenuContainer = () => {
  return (
    <div>
      <MenuSummary />
      <MenuFilters />
      <MenuSort />
      <Menu />
    </div>
  );
};

export default MenuContainer;
