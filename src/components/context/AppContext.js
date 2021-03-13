import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [darkBg, setDarkBg] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNavSm, setShowNavSm] = useState(false);
  const [showAddMsg, setShowAddMsg] = useState(false);
  const [showItemPop, setShowItemPop] = useState(false);
  const [itemPop, setItemPop] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const [numItems, setNumItems] = useState(0);
  const [total, setTotal] = useState(0);

  const value = {
    darkBg,
    setDarkBg,
    showCart,
    setShowCart,
    showLogin,
    setShowLogin,
    showCreateAccount,
    setShowCreateAccount,
    showSearch,
    setShowSearch,
    showNavSm,
    setShowNavSm,
    showAddMsg,
    setShowAddMsg,
    showItemPop,
    setShowItemPop,
    itemPop,
    setItemPop,
    cartItems,
    setCartItems,
    cartIsEmpty,
    setCartIsEmpty,
    numItems,
    setNumItems,
    total,
    setTotal
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
