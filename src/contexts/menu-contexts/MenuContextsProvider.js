import React, { useState, useContext } from "react";

const MenuContext = React.createContext(undefined);

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
};

const MenuProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [menu, setMenu] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sortBy, setSortBy] = useState();

  const MenuContextValue = {
    isFetching,
    setIsFetching,
    menu,
    setMenu,
    filter,
    setFilter,
    sortBy,
    setSortBy
  };

  return (
    <MenuContext.Provider value={MenuContextValue}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, useMenuContext };
