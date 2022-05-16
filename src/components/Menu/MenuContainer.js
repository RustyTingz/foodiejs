import MenuProvider from "../../store/MenuProvider/MenuProvider";
import Menu from "./Menu";
import MenuSummary from "./MenuSummary";

const MenuContainer = () => {
  return (
    <MenuProvider>
      <MenuSummary />
      <Menu />
    </MenuProvider>
  );
};

export default MenuContainer;
