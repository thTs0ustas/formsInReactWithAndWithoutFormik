import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Reservation } from "../presentational/reservation";
// import { ReservationForm } from "../../_reservationWithClone";
import { useReservations } from "../customHooks/Reducer";
import { BASE_URL } from "../constants";

function ReservationContainer(WrapComponent) {
  return function WC() {
    const prevItemIdRef = useRef({});

    const navigate = useNavigate();
    const { username } = useParams();

    const { state, dispatch } = useReservations();
    const { inputValues, requests, response } = state;
    const price = (
      inputValues.seat ? inputValues.seat.reduce((sum, seat) => sum + seat.cost, 0) : 0
    ).toFixed(2);

    useEffect(() => {
      if (!window.sessionStorage.getItem("token")) {
        navigate("/login");
      }
      prevItemIdRef.current = inputValues;
      axios.get(`${BASE_URL}/cinema`).then((response) => {
        dispatch({
          type: "REQUEST",
          payload: { key: "cinemas", value: response.data },
        });
      });
    }, []);

    React.useEffect(() => {
      if (inputValues.cinema !== prevItemIdRef.current.cinema) {
        axios.get(`${BASE_URL}/movies`).then((response) => {
          dispatch({
            type: "REQUEST",
            payload: { key: "movies", value: response.data },
          });
        });
      }
      if (inputValues.movie !== prevItemIdRef.current.movie) {
        axios.get(`${BASE_URL}/auditorium`).then((response) =>
          dispatch({
            type: "REQUEST",
            payload: { key: "auditoriums", value: response.data },
          })
        );
      }
      if (inputValues.auditorium !== prevItemIdRef.current.auditorium) {
        axios.get(`${BASE_URL}/screenings`).then((response) =>
          dispatch({
            type: "REQUEST",
            payload: { key: "screenings", value: response.data },
          })
        );
      }
      if (inputValues.screening !== prevItemIdRef.current.screening) {
        axios.get(`${BASE_URL}/seats`).then((response) =>
          dispatch({
            type: "REQUEST",
            payload: { key: "seats", value: response.data },
          })
        );
        axios.get(`${BASE_URL}/reservedSeats`).then((response) =>
          dispatch({
            type: "REQUEST",
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
      prevItemIdRef.current = inputValues;
      dispatch({
        type: "SEAT_ADD",
        payload: { name: "seat", value: seat },
      });
    };
    const handleSeatRemove = (id) => {
      prevItemIdRef.current = inputValues;
      dispatch({
        type: "SEAT_REMOVE",
        payload: { name: "seat", value: id },
      });
    };

    const handleChange = (event, seat) => {
      prevItemIdRef.current = inputValues;
      dispatch({
        type: "INPUT_CHANGE",
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
            seats: inputValues.seat.map((seat) => ({
              id: seat.id,
              discount_type: "adult",
              cost: seat.cost,
            })),
          },
        })
        .then(({ data }) =>
          dispatch({
            type: "RESPONSE",
            payload: data,
          })
        );
    };

    const setScreeningString = (start, end, date) => `
      ${new Date(date).toDateString()}
      ${new Date(start).toISOString().split("T")[1].slice(0, 5)} - 
      ${new Date(end).toISOString().split("T")[1].slice(0, 5)}`;

    const props = {
      handleSubmit,
      handleChange,
      setScreeningString,
      inputValues,
      requests,
      price,
      state,
      handleSeatRemove,
      handleSeatAdd,
    };

    return <WrapComponent {...props} />;
  };
}
export default ReservationContainer(Reservation);
// export default ReservationContainer(ReservationForm);
