import { useMenu } from "../../contexts/menu-context";
import Menu from "./Menu";
import { MenuProvider } from "../../contexts/menu-context";
import MenuFilters from "./MenuFilter";
import MenuSort from "./MenuSort";
import MenuSummary from "./MenuSummary";

const MenuContainer = () => {
  const { isFetching } = useMenu();

  return (
    <MenuProvider>
      <MenuSummary />
      <MenuFilters />
      <MenuSort />
      { isFetching && <p>Loading......</p>}
      { !isFetching && <Menu /> }
    </MenuProvider>
  );
};

export default MenuContainer;
