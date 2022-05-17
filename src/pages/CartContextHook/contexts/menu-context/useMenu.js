import { useCallback } from "react";
import { menuApi } from "../../../../api/menuApi";
import { useMenuContext } from "./MenuContextsProvider";
import { filterAndSort, FILTER_PREDICATE } from "../../../../utils/listFiltering";

export const MENU_FILTER = {
  CATEGORY: "category"
}

export const menuFilterFactory = (key, value) => {
  switch (key) {
    case MENU_FILTER.CATEGORY:
      return {
        key,
        value,
        predicate: FILTER_PREDICATE.equalTo
      }
  }
}

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

    menuApi
      .getMenu()
      .then((menu) => filterAndSort(menu, filters, sortBy))
      .then((menu) => {
        setFilters(filters);
        console.log("Filtered menu", menu);
        setMenu(menu);
        setIsFetching(false);
      })
  };

  const sortMenu = (sortBy) => {
    setIsFetching(true);

    menuApi
      .getMenu()
      .then((menu) => filterAndSort(menu, filters, sortBy))
      .then((menu) => {
        setSortBy(sortBy);
        setMenu(menu);
        setIsFetching(false);
      });
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
