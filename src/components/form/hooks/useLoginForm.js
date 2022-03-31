import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProvider, userLoginAction } from "../../../model";

export const useLoginForm = () => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      const username = window.sessionStorage.getItem("username");

      dispatch(
        userLoginAction({
          username,
          token: window.sessionStorage.getItem("token"),
        })
      );
      username && navigate(`/users/${username}/reservation`);
    }

    if (state && state.accessToken && state.username) {
      window.sessionStorage.setItem("token", state.accessToken);
      window.sessionStorage.setItem("username", state.username);
      dispatch(
        userLoginAction({
          username: state.username,
          token: state.accessToken,
        })
      );
      navigate(`/users/${state.username}/reservation`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return { state, setState };
};
