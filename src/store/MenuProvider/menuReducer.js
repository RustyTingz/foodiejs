import { menuApi } from "../../api/menuApi";

const ACTION_TYPE = {
  INITIALISE_MENU: "INITIALISE_MENU",
  FETCH_MENU: "FETCH_MENU",
};

export const menuActionFactory = {
  createInitialiseMenuAction: (menu) => {
    return { type: ACTION_TYPE.INITIALISE_MENU, payload: menu };
  },
  createFetchMenuAction: () => {
    return { type: ACTION_TYPE.FETCH_MENU };
  }
}

export const menuInitialState = {
  menu: []
}

const menuReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_MENU:
      menuApi.getMenu().then((menu) => {
        const action = menuActionFactory.createInitialiseMenuAction(menu);
        menuReducer(state, action);
      }); 
      return {
        ...state
      }
    case ACTION_TYPE.INITIALISE_MENU: 
      return {
        ...state,
        menu: action.payload
      }
    default:
      throw new Error(`MenuReducer: Unknown action type ${action.type}`);
  }
};

export default menuReducer;
