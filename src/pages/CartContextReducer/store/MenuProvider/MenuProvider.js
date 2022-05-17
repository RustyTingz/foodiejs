import { menuApi } from "../../../../api/menuApi";
import menuReducer, {
  menuActionFactory,
  menuInitialState,
} from "./menuReducer";

import { useReducer, useEffect } from "react";
import MenuContext from "./menu-context";

const MenuProvider = ({ children }) => {
  const [state, menuDispatch] = useReducer(menuReducer, menuInitialState);

  useEffect(() => {
    menuApi.getMenu().then((menu) => {
      const action = menuActionFactory.createInitialiseMenuAction(menu);
      menuDispatch(action);
    });
  }, []);

  const filterMenuHandler = (filter) => {
    const action = menuActionFactory.createFilterMenuAction(filter);
    menuDispatch(action); 
  }

  const sortMenuHandler = sortBy => {
    const action = menuActionFactory.createSortMenuAction(sortBy)
    menuDispatch(action); 
  }

  const menuContext = {
    ...state,
    filterMenu: filterMenuHandler,
    sortMenu: sortMenuHandler,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
};

export default MenuProvider;
