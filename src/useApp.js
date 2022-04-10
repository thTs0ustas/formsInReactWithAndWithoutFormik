import { useEffect } from "react";
import { initStore, useProvider } from "./model";
import { INITIAL_STATE } from "./model/constants/constants";

const useApp = () => {
  const [state, dispatch] = useProvider();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) {
      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      dispatch(initStore(JSON.parse(localStorage.getItem("state"))));
    }
  }, []);
  useEffect(() => {
    if (state !== INITIAL_STATE) {
      localStorage.setItem("state", JSON.stringify(state));

      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);
};

export { useApp };
