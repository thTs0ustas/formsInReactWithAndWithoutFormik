import React from "react";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { price, PRICING } from "../../reservation/helpers";
import { paymentToTicketAction } from "../actions/paymentToTicketAction";

const usePayment = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useSelector((state) => state.user);
  const { seats, seatToTicket } = useSelector((state) => state.seat);
  const { screening } = useSelector((state) => state.reservation.inputValues);

  React.useEffect(() => {
    const data = {
      screening_id: +screening.split(",")[0],
      price: price(seatToTicket),
      seats: map(seats, (currentSeat) => ({
        id: currentSeat.id,
        discount_type: currentSeat.discount_type,
        cost: PRICING[currentSeat.discount_type],
        screening_id: +screening.split(",")[0],
      })),
    };

    dispatch(paymentToTicketAction({ id, data }));
    navigate(`/user/${id}/tickets/new`);
    // axios
    //   .post(`${BASE_URL}/reservations/users/${id}/new`, {
    //     data: {
    //       screening_id: +screening.split(",")[0],
    //       price: price(seatToTicket),
    //       seats: map(seats, (currentSeat) => ({
    //         id: currentSeat.id,
    //         id: currentSeat.id,
    //         discount_type: currentSeat.discount_type,
    //         cost: PRICING[currentSeat.discount_type],
    //         screening_id: +screening.split(",")[0],
    //       })),
    //     },
    //   })
    //   // .then(() => dispatch(resetReservation()))
    //   .then(({ data }) => dispatch(responseAction(data)))
    //
    //   .then(() => navigate(`/${id}/tickets/new`))
    //   .catch((error) =>
    //     dispatch(handleError({ message: error.message, time: new Date().getTime() }))
    //   );
  }, []);
};

export { usePayment };
