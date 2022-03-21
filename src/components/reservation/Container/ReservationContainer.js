import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { map, reduce } from "lodash";
import axios from "axios";

import { Reservation } from "../presentational/reservation";
import { useProvider, actionTypes } from "../../../model";

function ReservationContainer(WrapComponent) {
  return function WC() {
    const historyState = useRef({});

    const [state, dispatch] = useProvider([
      "reservation.inputValues",
      "reservation.requests",
      "reservation.response",
      "BASE_URL",
    ]);

    // const [state, dispatch] = useProvider(["search"]);

    const { inputValues, requests, response, BASE_URL } = state;

    const navigate = useNavigate();
    const { username } = useParams();
    const price = (
      inputValues.seat ? reduce(inputValues.seat, (sum, seat) => sum + seat.cost, 0) : 0
    ).toFixed(2);

    useEffect(() => {
      if (!window.sessionStorage.getItem("token")) {
        navigate("/login");
      }

      historyState.current = inputValues;
      axios.get(`${BASE_URL}/cinema`).then((response) => {
        dispatch({
          type: actionTypes.request,
          payload: { key: "cinemas", value: response.data },
        });
      });
    }, []);

    React.useEffect(() => {
      if (inputValues.cinema !== historyState.current.cinema) {
        axios.get(`${BASE_URL}/movies`).then((response) => {
          dispatch({
            type: actionTypes.request,
            payload: { key: "movies", value: response.data },
          });
        });
      }
      if (inputValues.movie !== historyState.current.movie) {
        axios.get(`${BASE_URL}/auditorium`).then((response) =>
          dispatch({
            type: actionTypes.request,
            payload: { key: "auditoriums", value: response.data },
          })
        );
      }
      if (inputValues.auditorium !== historyState.current.auditorium) {
        axios.get(`${BASE_URL}/screenings`).then((response) =>
          dispatch({
            type: actionTypes.request,
            payload: { key: "screenings", value: response.data },
          })
        );
      }
      if (inputValues.screening !== historyState.current.screening) {
        axios.get(`${BASE_URL}/seats/${inputValues.auditorium}`).then((response) =>
          dispatch({
            type: actionTypes.request,
            payload: { key: "seats", value: response.data },
          })
        );
        axios.get(`${BASE_URL}/reservedSeats/${inputValues.screening}`).then((response) =>
          dispatch({
            type: actionTypes.reservedSeats,
            payload: { key: "reservedSeats", value: response.data },
          })
        );
      }
    }, [inputValues]);

    useEffect(
      () =>
        response &&
        navigate(`/users/${username}/reservation/ticket`, {
          state: {
            reservationId: response.Reservations.at(-1).id,
          },
        }),
      [response]
    );

    const handleSeatAdd = (seat) => {
      historyState.current = inputValues;
      dispatch({
        type: actionTypes.addSeat,
        payload: { name: "seat", value: seat },
      });
    };

    const handleSeatRemove = (id) => {
      historyState.current = inputValues;
      dispatch({
        type: actionTypes.removeSeat,
        payload: id,
      });
    };

    const handleChange = (event) => {
      historyState.current = inputValues;
      dispatch({
        type: actionTypes.inputChange,
        payload: event.target,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post(`http://localhost:4000/reservations/users/${username}/new`, {
          data: {
            screening_id: +inputValues.screening,
            price: +price,
            seats: map(inputValues.seat, (seat) => ({
              id: seat.id,
              discount_type: "adult",
              cost: seat.cost,
              screening_id: inputValues.screening,
            })),
          },
        })
        .then(({ data }) =>
          dispatch({
            type: actionTypes.response,
            payload: data,
          })
        );
    };

    const props = {
      handleSubmit,
      handleChange,
      inputValues,
      requests,
      state,
      handleSeatRemove,
      handleSeatAdd,
    };

    return <WrapComponent {...props} />;
  };
}
export default ReservationContainer(Reservation);
