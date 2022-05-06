import React, { useEffect, useMemo } from "react";
import { get, isEmpty, reduce } from "lodash";
import { createContext, useContextSelector } from "use-context-selector";

import PropTypes from "prop-types";
import { modelReducer } from "../reducer/modelReducer";
import { INITIAL_STATE } from "../constants/constants";

const Model = createContext({});

function Provider({ children }) {
  const items = JSON.parse(sessionStorage.getItem("persistedState"));

  const [state, dispatch] = React.useReducer(
    modelReducer,
    items ? { ...INITIAL_STATE, ...items } : INITIAL_STATE
  );

  useEffect(() => {
    if (isEmpty(items)) {
      sessionStorage.setItem(
        "persistedState",
        JSON.stringify({
          userInfo: INITIAL_STATE.userInfo,
          theme: INITIAL_STATE.theme,
          reservation: INITIAL_STATE.reservation,
          upcoming: INITIAL_STATE.upcoming,
        })
      );
    }
  }, [items]);

  useEffect(() => {
    if (!isEmpty(items)) {
      sessionStorage.setItem(
        "persistedState",
        JSON.stringify({
          userInfo: state.userInfo,
          theme: state.theme,
          reservation: state.reservation,
          upcoming: state.upcoming,
        })
      );
    }
  }, [state, items]);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);
  return <Model.Provider value={value}>{children}</Model.Provider>;
}

Provider.displayName = "Model";

const useProvider = (selectors = []) => {
  const state = useContextSelector(Model, (slices) =>
    isEmpty(selectors)
      ? slices[0]
      : reduce(
          selectors,
          (st, path) => ({
            ...st,
            [path.split(".")[1] ? path.split(".").at(-1) : path]: get(slices[0], path),
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

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, useProvider };
