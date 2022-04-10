import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { newTicketAction, useProvider } from "../../../model";
import { handleError } from "../../../model/actions";

export const useTicket = ({ username, reservationId }) => {
  const [state, dispatch] = useProvider(["BASE_URL"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      axios
        .get(
          `${state.BASE_URL}/reservations/users/${username}/ticket/${reservationId}`
        )
        .then(({ data }) => dispatch(newTicketAction({ data })))
        .catch((error) =>
          dispatch(
            handleError({
              message: error.message,
              time: new Date().getTime(),
            })
          )
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
