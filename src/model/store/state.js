import { modelReducer } from "../reducer/modelReducer";
import { INITIAL_STATE } from "../constants/constants";
import React from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { isEmpty, get, reduce } from "lodash";

const Model = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(modelReducer, INITIAL_STATE, (item) => item);
  const value = [state, dispatch];
  return <Model.Provider value={value}>{children}</Model.Provider>;
};
Provider.displayName = "Model";

const useProvider = (partOfState = []) => {
  const state = useContextSelector(Model, (state) =>
    isEmpty(partOfState)
      ? state[0]
      : reduce(
          partOfState,
          (st, item) => ({
            ...st,
            [item.split(".")[1] ? item.split(".").at(-1) : item]: get(state[0], item),
          }),
          {}
        )
  );
  const dispatch = useContextSelector(Model, (v) => v[1]);
  if (!state || !dispatch) {
    throw new Error("Component is outside the context provider");
  }
  return [state, dispatch];
};

export { Provider, useProvider };
