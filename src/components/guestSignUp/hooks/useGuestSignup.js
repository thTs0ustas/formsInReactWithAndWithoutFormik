import { useEffect, useState } from "react";

import { useProvider, userLoginAction } from "../../../model";

export const useGuestSignup = () => {
  const [state, setState] = useState(null);
  const [, dispatch] = useProvider();

  useEffect(() => {
    if (state && state.accessToken && state.username) {
      dispatch(
        userLoginAction({
          username: state.username,
          token: state.accessToken,
          isMember: state.isMember,
        })
      );
    }
  }, [state]);

  return { state, setState };
};
