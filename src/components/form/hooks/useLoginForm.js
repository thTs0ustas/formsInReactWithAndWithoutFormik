import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { actionTypes, useProvider } from "../../../model";

export const useLoginForm = () => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();
  let navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      const username = window.sessionStorage.getItem("username");
      // overkill
      dispatch({
        type: actionTypes.userLogin,
        payload: { username: username, token: window.sessionStorage.getItem("token") },
      });
      username && navigate(`/users/${username}/reservation`);
    }

    if (state && state.accessToken && state.username) {
      window.sessionStorage.setItem("token", state.accessToken);
      window.sessionStorage.setItem("username", state.username);
      dispatch({
        type: actionTypes.userLogin,
        payload: { username: state.username, token: state.accessToken },
      });
      navigate(`/users/${state.username}/reservation`);
    }
  }, [state]);

  return { state, setState };
};
