import React, { useState, useContext } from "react";

const MenuContext = React.createContext({
  isFetching: false,
  setIsFetching: () => {},
  menu: [],
  setMenu: () => { },
  filters: [],
  setFilters: () => { },
  sortBy: undefined,
  setSortBy: () => { },
});

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  
  return context;
};

const MenuProvider = (props ) => {
  const [isFetching, setIsFetching] = useState(false);
  const [menu, setMenu] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState(undefined);

  const MenuContextValue = {
    isFetching,
    setIsFetching,
    menu,
    setMenu,
    filters,
    setFilters,
    sortBy,
    setSortBy
  };

  return (
    <MenuContext.Provider value={MenuContextValue} {...props}/>
  );
};

export { MenuProvider, useMenuContext };
