import React, { useEffect, useReducer, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Reservation } from "../presentational/reservation";
import { reservationReducer } from "../customHooks/Reducer";
import { BASE_URL, INITIAL_STATE } from "../constants";

function ReservationContainer(WrapComponent) {
  return function WC() {
    const navigate = useNavigate();
    const { username } = useParams();
    const [{ inputValues, requests, response }, dispatch] = useReducer(
      reservationReducer,
      INITIAL_STATE
    );

    const price = (
      inputValues.seat ? requests.seats.find((seat) => seat.id == inputValues.seat).cost : 0
    ).toFixed(2);

    const setScreeningString = (start, end, date) => `
      ${new Date(date).toDateString()}
      ${new Date(start).toISOString().split("T")[1].slice(0, 5)} - 
      ${new Date(end).toISOString().split("T")[1].slice(0, 5)}`;

    const prevItemIdRef = useRef({});

    useEffect(() => {
      if (!window.sessionStorage.getItem("token")) {
        navigate("/login");
      }
      axios.get(`${BASE_URL}/cinema`).then((response) =>
        dispatch({
          type: "REQUEST",
          payload: { key: "cinemas", value: response.data },
        })
      );
    }, []);

    React.useEffect(() => {
      if (inputValues.cinema !== prevItemIdRef.current.cinema) {
        axios.get(`${BASE_URL}/movies`).then((response) =>
          dispatch({
            type: "REQUEST",
            payload: { key: "movies", value: response.data },
          })
        );
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

    const handleChange = (event) => {
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
            price: 15,
            seats: [{ id: +inputValues.seat, discount_type: "adult", cost: 15 }],
          },
        })
        .then(({ data }) =>
          dispatch({
            type: "RESPONSE",
            payload: data,
          })
        );
    };

    const props = {
      handleSubmit,
      handleChange,
      setScreeningString,
      inputValues,
      requests,
      price,
    };

    return <WrapComponent {...props} />;
  };
}
export default ReservationContainer(Reservation);
