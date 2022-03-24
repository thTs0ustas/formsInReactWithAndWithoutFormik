import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { actionTypes, useProvider } from "../../../model";

export const useTicket = (username, reservationId) => {
  const [state, dispatch] = useProvider();

  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      axios
        .get(`${state.BASE_URL}/reservations/users/${username}/ticket/${reservationId}`)
        .then(({ data }) => dispatch({ type: actionTypes.newTicket, payload: data }));
    }
  }, []);
};
