
import { useReducer } from "react";
import CartContext from "./cart-context";
import cartReducer, { defaultCartState, cartActionFactory } from "./cartReducer";

const CartProvider = props => {
  const [state, cartDispatcher] = useReducer(cartReducer, defaultCartState)

  const addItemHandler = (item) => {
    let action = cartActionFactory.createAddItemAction(item);
    cartDispatcher(action);

  }
  const increaseQuantityHandler = (sku) => {
    let action = cartActionFactory.createIncreaseQuantityAction(sku);
    cartDispatcher(action);
  }
  const decreaseQuantityHandler = (sku) => { 
    let action = cartActionFactory.createDecreaseQuantityAction(sku);
    cartDispatcher(action);
   }

  const cartContext = {
    ...state,
    addItem: addItemHandler,
    increaseQuantity: increaseQuantityHandler, 
    decreaseQuantity:decreaseQuantityHandler
  }

  return (<CartContext.Provider value={cartContext}>
    { props.children }
  </CartContext.Provider>)    
}

export default CartProvider;