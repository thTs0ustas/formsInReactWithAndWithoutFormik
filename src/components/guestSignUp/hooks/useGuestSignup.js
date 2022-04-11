import { useEffect, useState } from "react";

import { useProvider, userLoginAction } from "../../../model";

export const useGuestSignup = () => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();

  useEffect(() => {
    if (state && state["accessToken"] && state.username) {
      window.sessionStorage.setItem("token", state["accessToken"]);
      window.sessionStorage.setItem("username", state.username);
      dispatch(
        userLoginAction({
          username: state.username,
          token: state["accessToken"],
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return { state, setState };
};
