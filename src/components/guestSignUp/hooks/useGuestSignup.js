import { useEffect, useState } from "react";

import { useProvider, userLoginAction } from "../../../model";

export const useGuestSignup = () => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();

  useEffect(() => {
    console.log(state);
    state?.Error && alert(state?.Error);
    if (state && state.accessToken && state.username) {
      window.sessionStorage.setItem("token", state.accessToken);
      window.sessionStorage.setItem("username", state.username);
      dispatch(
        userLoginAction({
          username: state.username,
          token: state.accessToken,
        })
      );
      //Close Modal
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return { state, setState };
};
