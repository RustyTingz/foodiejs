import { menuApi } from "../../api/menuApi";
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

  return <MenuContext.Provider value={state}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
