import { filterAndSort } from "../../../../utils/listFiltering";

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
  menuCache: [],
  filters: [],
  sortBy: undefined,
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALISE_MENU: {
      let menuCache = [...action.payload];
      let filteredMenu = filterAndSort([...menuCache], state.filters, state.sortBy);

      return {
        ...state,
        menuCache,
        menu: filteredMenu,
      };
    }
    case ACTION_TYPE.FILTER_MENU: {
      let filters = action.payload;
      let filteredMenu = filterAndSort([...state.menuCache], filters, state.sortBy);
      return {
        ...state,
        menu: filteredMenu,
        filters: filters,
      };
    }
    case ACTION_TYPE.SORT_MENU: {
      let sortBy = action.payload;
      let filteredMenu = filterAndSort([...state.menuCache], state.filters, sortBy)
      
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
