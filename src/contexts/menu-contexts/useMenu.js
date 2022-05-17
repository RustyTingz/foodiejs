import { useCallback } from "react";
import { menuApi } from "../../api/menuApi";
import { useMenuContext } from "./MenuContextsProvider";
import { filterAndSort } from "./menuFiltering";

const useMenu = () => {
  const {
    isFetching,
    setIsFetching,
    menu,
    setMenu,
    filters,
    setFilters,
    sortBy,
    setSortBy,
  } = useMenuContext();

  const fetchMenu = useCallback(() => {
    setIsFetching(true);
    menuApi.getMenu().then((menu) => {
      setMenu(menu);
      setIsFetching(false);
    });
  }, [setIsFetching, setMenu]);

  const filterMenu = (filters) => {
    setIsFetching(true);
    setFilters(filters);

    menuApi
      .getMenu()
      .then((menu) => filterAndSort(menu, filters, sortBy))
      .then((menu) => setMenu(menu))
      .then(() => setIsFetching(false));
  };

  const sortMenu = (sortBy) => {
    setIsFetching(true);
    setSortBy(sortBy);

    menuApi
      .getMenu()
      .then((menu) => filterAndSort(menu, filters, sortBy))
      .then((menu) => setMenu(menu))
      .then(() => setIsFetching(false));
  };

  return {
    isFetching,
    fetchMenu,
    menu,
    filterMenu,
    sortMenu,
    filters,
    sortBy,
  };
};

export default useMenu;
