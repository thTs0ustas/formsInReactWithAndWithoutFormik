import { useEffect, useRef } from "react";
import axios from "axios";

import {
  addSeatAction,
  inputChangeAction,
  removeSeatAction,
  requestAction,
  resetReservation,
} from "../../../../model";

import { PRICING } from "../../helpers";
import { handleError } from "../../../../model/actions";
import { filter, flow, keys, map, omit } from "lodash/fp";
import { useParams } from "react-router-dom";

export const useResContainer = ({ BASE_URL, inputValues, dispatch }) => {
  const historyState = useRef({});
  const { id } = useParams();
  console.log(id);
  useEffect(async () => {
    dispatch(resetReservation());
    await axios
      .get(`${BASE_URL}/moviesOfTheMonth/${id}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(requestAction(data));
        dispatch(
          inputChangeAction({
            name: "movie",
            value: data.movie.Movie.title,
          })
        );
      })
      .catch((error) =>
        dispatch(handleError({ message: error.message, time: new Date().getTime() }))
      );
  }, []);

  const dataForPayment = (tickets) =>
    flow(
      omit("sum"),
      keys,
      map((ticket) => {
        if (tickets[ticket] > 0) {
          return {
            name: `${ticket} ticket`.toUpperCase(),
            price: PRICING[ticket] * 100,
            quantity: tickets[ticket],
          };
        }
      }),
      filter(undefined)
    )(tickets);

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

  return { handleSeatAdd, id, handleSeatRemove, handleChange, dataForPayment };
};
