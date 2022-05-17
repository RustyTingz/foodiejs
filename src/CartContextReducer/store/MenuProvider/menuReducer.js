const ACTION_TYPE = {
  INITIALISE_MENU: "INITIALISE_MENU",
  FILTER_MENU: "FILTER_MENU",
  SORT_MENU: "SORT_MENU",
};

export const menuActionFactory = {
  createInitialiseMenuAction: (menu) => {
    return { type: ACTION_TYPE.INITIALISE_MENU, payload: menu };
  },
  createFilterMenuAction: (filter) => {
    return { type: ACTION_TYPE.FILTER_MENU, payload: filter };
  },
  createSortMenuAction: (sortBy) => {
    return { type: ACTION_TYPE.SORT_MENU, payload: sortBy };
  },
};

export const menuInitialState = {
  menu: [],
  menuItems: [],
  filter: undefined,
  sortBy: undefined,
};

const filterMenuItem = (menuItem, filter = undefined) => {
  return filter === undefined ||
    (filter &&
      menuItem[filter.field] &&
      menuItem[filter.field] === filter.value);
};

const sortComparer = (itemA, itemB) => {
  if (itemA > itemB) {
    return 1;
  }
  if (itemA < itemB) {
    return -1;
  }

  return 0;
};

const sortByField = (itemA, itemB, sortBy = undefined) => {
  if (!sortBy) {
    return 0;
  }

  return sortComparer(itemA[sortBy], itemB[sortBy]);
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALISE_MENU: {
      let menuItems = [...action.payload];
      let filteredMenu = [...menuItems]
        .filter((item) => filterMenuItem(item, state.filter))
        .sort((a, b) => sortByField(a, b, state.sortBy));

      return {
        ...state,
        menuItems: menuItems,
        menu: filteredMenu,
      };
    }
    case ACTION_TYPE.FILTER_MENU: {
      let filter = action.payload;
      let filteredMenu = [...state.menuItems]
        .filter((item) => filterMenuItem(item, filter))
        .sort((a, b) => sortByField(a, b, state.sortBy));
      return {
        ...state,
        menu: filteredMenu,
        filter: filter,
      };
    }
    case ACTION_TYPE.SORT_MENU: {
      let sortBy = action.payload;
      let filteredMenu = [...state.menuItems]
        .filter((item) => filterMenuItem(item, state.filter))
        .sort((a, b) => sortByField(a, b, sortBy));
      return {
        ...state,
        menu: filteredMenu,
        sort: sortBy,
      };
    }
    default:
      throw new Error(`MenuReducer: Unknown action type ${action.type}`);
  }
};

export default menuReducer;
