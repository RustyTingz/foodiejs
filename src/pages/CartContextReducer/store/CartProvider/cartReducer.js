export let defaultCartState = {
  items: [],
  amount: 0.0,
};

let actionTypes = {
  ADD_ITEM: "ADD_ITEM",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

export let cartActionFactory = {
  createAddItemAction: (item) => {
    return { type: actionTypes.ADD_ITEM, payload: { ...item } };
  },
  createIncreaseQuantityAction: (sku) => {
    return { type: actionTypes.INCREASE_QUANTITY, payload: sku };
  },
  createDecreaseQuantityAction: (sku) => {
    return { type: actionTypes.DECREASE_QUANTITY, payload: sku };
  },
};

const calculateCartAmount = (state) => {
  let amount = state.items.length
    ? state.items
        .map((item) => item.price * item.quantity)
        .reduce((total, itemTotal) => (total += itemTotal))
    : 0.0;

  return amount;
};

const findCartItemIndex = (items, sku) => {
  return items.findIndex((item) => item.sku === sku);
};

const cartReducer = (
  state = defaultCartState,
  action = { type: "default" }
) => {
  if (!(action.type in actionTypes)) {
    return state;
  }

  let newState = {
    ...state,
  };

  if (action.type === actionTypes.ADD_ITEM) {
    let itemIdx = findCartItemIndex(newState.items, action.payload.sku);

    if (itemIdx !== -1) {
      newState.items[itemIdx].quantity += 1;
    } else {
      newState.items.push(action.payload);
    }
  }

  if (action.type === actionTypes.INCREASE_QUANTITY) {
    let itemIdx = findCartItemIndex(newState.items, action.payload);

    if (itemIdx !== -1) {
      newState.items[itemIdx].quantity = newState.items[itemIdx].quantity + 1;
    }
  }

  if (action.type === actionTypes.DECREASE_QUANTITY) {
    let itemIdx = findCartItemIndex(newState.items, action.payload);

    if (itemIdx !== -1) {
      if (newState.items[itemIdx].quantity === 1) {
        newState.items = newState.items.filter(
          (item) => item.sku !== action.payload
        );
      } else {
        newState.items[itemIdx].quantity = newState.items[itemIdx].quantity - 1;
      }
    }
  }

  newState.amount = calculateCartAmount(newState);
  return newState;
};

export default cartReducer;
