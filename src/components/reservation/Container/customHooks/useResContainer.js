import React, { useEffect, useRef } from "react";
import axios from "axios";
import { actionTypes } from "../../../../model";
import { useNavigate } from "react-router-dom";

export const useResContainer = ({ BASE_URL, inputValues, dispatch, response, username }) => {
  const historyState = useRef({});
  const navigate = useNavigate();

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

  useEffect(() => {
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

  return { handleSeatAdd, handleSeatRemove, handleChange };
};
