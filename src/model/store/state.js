import React, { useEffect, useMemo } from "react";
import { get, isEmpty, reduce } from "lodash";
import { createContext, useContextSelector } from "use-context-selector";

import { modelReducer } from "../reducer/modelReducer";
import { INITIAL_STATE } from "../constants/constants";

const Model = createContext({});

const Provider = ({ children }) => {
  const items = sessionStorage.getItem("state");
  const [state, dispatch] = React.useReducer(
    modelReducer,
    items ? JSON.parse(items) : INITIAL_STATE
  );

  useEffect(() => {
    if (isEmpty(items)) {
      sessionStorage.setItem("state", JSON.stringify(INITIAL_STATE));
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(items)) {
      sessionStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);
  return <Model.Provider value={value}>{children}</Model.Provider>;
};

Provider.displayName = "Model";

const useProvider = (selectors = []) => {
  const state = useContextSelector(Model, (state) =>
    isEmpty(selectors)
      ? state[0]
      : reduce(
          selectors,
          (st, path) => ({
            ...st,
            [path.split(".")[1] ? path.split(".").at(-1) : path]: get(
              state[0],
              path
            ),
          }),
          {}
        )
  );

  const dispatch = useContextSelector(Model, (v) => v[1]);
  if (!state || !dispatch) {
    throw new Error("useProvider must be used within a Provider");
  }
  return [state, dispatch];
};

export { Provider, useProvider };
