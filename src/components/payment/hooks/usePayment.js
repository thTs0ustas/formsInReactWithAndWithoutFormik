import React from "react";
import axios from "axios";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";
import { responseAction, useProvider } from "../../../model";
import { price } from "../../reservation/helpers";

const usePayment = () => {
  const [, dispatch] = useProvider();
  const navigate = useNavigate();

  const { BASE_URL, seat, screening } = JSON.parse(
    window.sessionStorage.getItem("request")
  );
  const username = window.sessionStorage.getItem("username");

  React.useEffect(() => {
    axios
      .post(`${String(BASE_URL)}/reservations/users/${username}/new`, {
        data: {
          screening_id: +screening,
          price: +price(seat),
          seats: map(seat, (seat) => ({
            id: seat.id,
            discount_type: "adult",
            cost: seat.cost,
            screening_id: +screening,
          })),
        },
      })
      .then(({ data }) => dispatch(responseAction(data)))
      .then(() => window.sessionStorage.removeItem("request"))
      .then(() => navigate(`/${username}/tickets/new`))
      .catch((err) => alert(err)); // TODO: handle error with new action
  }, []);
};

export { usePayment };
