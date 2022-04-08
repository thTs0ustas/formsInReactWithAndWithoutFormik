import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProvider, userLoginAction } from "../../../model";

export const useLoginForm = (isInModal = false) => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();
  const navigate = useNavigate();

  const token = window.sessionStorage.getItem("token");
  const username = window.sessionStorage.getItem("username");

  useEffect(() => {
    if (token) {
      dispatch(userLoginAction({ username, token }));
      username && navigate("/");
    }

    if (state?.accessToken && state?.username) {
      window.sessionStorage.setItem("token", state.accessToken);
      window.sessionStorage.setItem("username", state.username);
      dispatch(
        userLoginAction({
          username: state.username,
          token: state.accessToken,
        })
      );
      isInModal || navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return { state, setState };
};
