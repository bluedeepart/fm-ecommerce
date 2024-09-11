/* eslint-disable react/prop-types */
import products from '../data/products';
import { createContext, useRef, useState } from 'react';
import useClassRemover from '../hooks/useClassRemover';

const INITIALISE_VALUES = {
  products,
  showCart: false,
  showMenu: false,
  cartItems: [],
  cartRef: null,
  cartTogglerRef: null,
  onCartToggle: () => { },
  onAddToCart: () => { },
  onRemoveCart: () => { },
  onMenuToggle: () => { },
};

const CartContext = createContext(INITIALISE_VALUES);

export const CartContentProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartRef = useRef();
  const cartTogglerRef = useRef();

  function handleClickOutside() {
    setShowCart(false);
  }

  /* CUSTOM HOOK */
  useClassRemover(cartRef, cartTogglerRef, handleClickOutside, showCart);

  /* TOGGLE CART */
  function cartHandler() {
    setShowCart(prevCartState => !prevCartState);
  }

  /* ADD TO CART */
  function handleAddToCart(data, count) {
    setCartItems(prevItems => {
      const newItemIndex = prevItems.findIndex(item => item.id === data.id);
      const newItem = { ...data, itemCount: count };
      const updatedItems = [...prevItems];
      if (newItemIndex > -1) {
        updatedItems[newItemIndex] = newItem;
        if (count === 0) {
          updatedItems.splice(newItemIndex, 1);
        }
        return updatedItems;
      }
      if (count > 0) {
        return [...updatedItems, newItem];
      }

      return updatedItems;
    });
  }

  /* REMOVE FROM CART */
  function handlerRemoveFromCart(id) {
    if (window.confirm('Are you sure your want to remove the item?')) {
      setCartItems(prevItems => {
        const newItemIndex = prevItems.findIndex(item => item.id === id);
        const updtaedItems = [...prevItems];
        updtaedItems.splice(newItemIndex, 1);
        return updtaedItems;
      });
    }
  }

  /* MENU TOGGLER */
  function handleMenuToggle() {
    setShowMenu(prevState => !prevState);
  }

  const cartCtx = {
    products,
    showCart,
    showMenu,
    cartItems,
    cartRef,
    cartTogglerRef,
    onCartToggle: cartHandler,
    onAddToCart: handleAddToCart,
    onRemoveCart: handlerRemoveFromCart,
    onMenuToggle: handleMenuToggle,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
