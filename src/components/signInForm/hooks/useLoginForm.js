import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProvider, userLoginAction } from "../../../model";

export const useLoginForm = (isInModal = false) => {
  const [state, setState] = useState(null);
  console.log(state);
  const [
    {
      userInfo: { username, token },
    },
    dispatch,
  ] = useProvider(["userInfo"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(userLoginAction({ username, token }));
      username && navigate("/");
    }

    if (state?.accessToken && state?.username) {
      dispatch(
        userLoginAction({
          username: state.username,
          token: state.accessToken,
          isMember: state.isMember,
          isAdmin: state.isAdmin,
        })
      );
      isInModal || navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return { state, setState };
};
