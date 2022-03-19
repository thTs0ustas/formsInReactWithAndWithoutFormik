import { reservationReducer } from "../reducer/modelReducer";
import { INITIAL_STATE } from "../constants/constants";
import React from "react";

const Model = React.createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reservationReducer, INITIAL_STATE, (item) => item);

  const value = [state, dispatch];

  return <Model.Provider value={value}>{children}</Model.Provider>;
};

const useProvider = () => {
  const context = React.useContext(Model);
  if (!context) {
    throw new Error("Component is outside the context provider");
  }
  return context;
};

export { Provider, useProvider };
