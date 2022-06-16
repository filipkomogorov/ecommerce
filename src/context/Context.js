import React, { createContext, useContext, useReducer } from "react";
import { Item } from "../data/Products";
import { cartReducer } from "./Reducers";

import { products } from "../data/Products";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
