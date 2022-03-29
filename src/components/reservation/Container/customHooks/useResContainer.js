import { useEffect, useRef } from "react";
import axios from "axios";
import {
  addSeatAction,
  inputChangeAction,
  removeSeatAction,
  requestAction,
  reservedSeatsAction,
} from "../../../../model";
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
      dispatch(
        requestAction({
          key: "cinemas",
          value: response.data,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(inputValues);
    if (inputValues.cinema !== historyState.current.cinema) {
      axios.get(`${BASE_URL}/movies`).then((response) => {
        dispatch(requestAction({ key: "movies", value: response.data }));
      });
    }
    if (inputValues.movie !== historyState.current.movie) {
      axios.get(`${BASE_URL}/auditorium`).then((response) =>
        dispatch(
          requestAction({
            key: "auditoriums",
            value: response.data,
          })
        )
      );
    }
    if (inputValues.auditorium !== historyState.current.auditorium) {
      axios.get(`${BASE_URL}/screenings`).then((response) =>
        dispatch(
          requestAction({
            key: "screenings",
            value: response.data,
          })
        )
      );
    }
    if (
      inputValues.screening !== historyState.current.screening &&
      inputValues.numOfTickets === historyState.current.numOfTickets
    ) {
      axios.get(`${BASE_URL}/seats/${inputValues.auditorium}`).then((response) => {
        dispatch(
          requestAction({
            key: "seats",
            value: response.data,
          })
        );
      });
      axios.get(`${BASE_URL}/reservedSeats/${inputValues.screening}`).then((response) => {
        dispatch(
          reservedSeatsAction({
            key: "reservedSeats",
            value: response.data,
          })
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

  useEffect(() => {
    response &&
      navigate(`/users/${username}/reservation/ticket`, {
        state: {
          reservationId: response["Reservations"].at(-1).id,
        },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleSeatAdd = (seat) => {
    historyState.current = inputValues;
    dispatch(
      addSeatAction({
        name: "seat",
        value: seat,
      })
    );
  };

  const handleSeatRemove = (id) => {
    historyState.current = inputValues;
    dispatch(removeSeatAction(id));
  };

  const handleChange = (event) => {
    historyState.current = inputValues;
    dispatch(
      inputChangeAction({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  return { handleSeatAdd, handleSeatRemove, handleChange };
};
