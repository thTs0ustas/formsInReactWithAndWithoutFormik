import { useEffect, useRef } from "react";
import axios from "axios";
import { differenceWith, flatMap, isEqual, toPairs } from "lodash";

import {
  addSeatAction,
  inputChangeAction,
  removeSeatAction,
  requestAction,
  resetReservation,
} from "../../../../model";

import { fetchRequest, nextRequest, PRICING } from "../../helpers";
import { handleError } from "../../../../model/actions";
import { filter, flow, keys, map, omit } from "lodash/fp";
import { useParams } from "react-router-dom";

export const useResContainer = ({ BASE_URL, inputValues, dispatch }) => {
  const historyState = useRef({});
  const { title } = useParams();

  useEffect(async () => {
    dispatch(resetReservation());
    await axios
      .get(`${BASE_URL}/movies`)
      .then((response) => {
        dispatch(
          requestAction({
            key: "movies",
            value: response.data,
          })
        );
      })
      .catch((error) =>
        dispatch(handleError({ message: error.message, time: new Date().getTime() }))
      );
  }, []);

  useEffect(() => {
    const diff = flatMap(
      differenceWith(toPairs(inputValues), toPairs(historyState.current), isEqual)
    )[0];

    fetchRequest({
      types: nextRequest(inputValues.auditorium, inputValues.screening)[diff],
      action: requestAction,
      baseUrl: BASE_URL,
      dispatch,
    });
  }, [inputValues]);

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

  return { handleSeatAdd, title, handleSeatRemove, handleChange, dataForPayment };
};
