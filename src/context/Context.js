import React, { createContext } from "react";
import { faker } from "@faker-js/faker";

const Cart = createContext();

const Context = ({ children }) => {
  return (
    <React.Fragment>
      <Cart.Provider>{children}</Cart.Provider>
    </React.Fragment>
  );
};

export default Context;
