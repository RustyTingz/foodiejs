import { useCartContext } from "./CartContextProvider";

const useCart = () => {
  const {
    cartItems,
    setCartItems,
    totalAmount,
    setTotalAmount,
    setCartItemCount,
    cartItemCount,
  } = useCartContext();

  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce(
      (total, currentItem) =>
        (total += currentItem.price * currentItem.quantity),
      0
    );
  };

  const calculateCartItems = (cartItems) => {
    return cartItems.reduce(
      (total, currentItem) => (total += 1 * currentItem.quantity),
      0
    );
  };

  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
    setTotalAmount(calculateTotalAmount(newCartItems));
    setCartItemCount(calculateCartItems(newCartItems));
  };

  const cartAddItem = (item) => {
    let cartItemIdx = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let newCartItems = [...cartItems];
    if (cartItemIdx !== -1) {
      newCartItems[cartItemIdx].quantity += 1;
    } else {
      newCartItems.push({ ...item, quantity: 1 });
    }

    updateCart(newCartItems);
  };

  const cartRemoveItem = (item) => {
    let newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);

    updateCart(newCartItems);
  };

  const cartIncreaseItemQuantity = (item) => {
    let cartItemIdx = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let newCartItems = [...cartItems];
    if (cartItemIdx !== -1) {
      newCartItems[cartItemIdx].quantity += 1;
      updateCart(newCartItems);
    }
  };

  const cartDecreaseItemQuantity = (item) => {
    let cartItemIdx = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    let newCartItems = [...cartItems];
    if (cartItemIdx !== -1 && newCartItems[cartItemIdx].quantity) {
      newCartItems[cartItemIdx].quantity -= 1;
      updateCart(newCartItems);
    } else if (cartItemIdx !== -1) {
      cartRemoveItem(item);
    }
  };

  return {
    cartItems,
    cartItemCount,
    totalAmount,
    cartAddItem,
    cartRemoveItem,
    cartIncreaseItemQuantity,
    cartDecreaseItemQuantity,
  };
};

export default useCart;
