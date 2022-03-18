import React, { useReducer } from "react";
import { reservationReducer } from "../reservation/customHooks/Reducer";
import { INITIAL_STATE } from "../reservation/constants";

const CountContext = React.createContext();

export const FormClone = ({ children, handleSubmit }) => {
  const [state, dispatch] = useReducer(reservationReducer, INITIAL_STATE);
  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>
      <form className="inline-form" onSubmit={handleSubmit}>
        {children}
      </form>
    </CountContext.Provider>
  );
};

export const useForm = () => {
  const context = React.useContext(CountContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
