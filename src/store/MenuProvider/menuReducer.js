const ACTION_TYPE = {
  INITIALISE_MENU: "INITIALISE_MENU",
};

export const menuActionFactory = {
  createInitialiseMenuAction: (menu) => {
    return { type: ACTION_TYPE.INITIALISE_MENU, payload: menu };
  }
}

export const menuInitialState = {
  menu: []
}

const menuReducer = (state, action) => {
  switch (action.type) {
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
