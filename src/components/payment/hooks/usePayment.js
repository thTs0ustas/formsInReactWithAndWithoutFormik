import React from "react";
import axios from "axios";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";
import { responseAction, useProvider } from "../../../model";
import { price, PRICING } from "../../reservation/helpers";
import { handleError } from "../../../model/actions";

const usePayment = () => {
  const [, dispatch] = useProvider();
  const navigate = useNavigate();

  const [{ BASE_URL, numOfTickets, seat, screening, username }] = useProvider([
    "userInfo.username",
    "BASE_URL",
    "reservation.inputValues.numOfTickets",
    "reservation.inputValues.seat",
    "reservation.inputValues.screening",
  ]);

  React.useEffect(() => {
    axios
      .post(`${String(BASE_URL)}/reservations/users/${username}/new`, {
        data: {
          screening_id: +screening.split(",")[0],
          price: price(numOfTickets),
          seats: map(seat, (seat) => ({
            id: seat.id,
            discount_type: seat.discount_type,
            cost: PRICING[seat.discount_type],
            screening_id: +screening.split(",")[0],
          })),
        },
      })
      // .then(() => dispatch(resetReservation()))
      .then(({ data }) => dispatch(responseAction(data)))

      .then(() => navigate(`/${username}/tickets/new`))
      .catch((error) =>
        dispatch(handleError({ message: error.message, time: new Date().getTime() }))
      );
  }, [BASE_URL, dispatch, navigate, numOfTickets, screening, seat, username]);
};

export { usePayment };
