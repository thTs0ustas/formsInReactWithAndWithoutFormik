import { useEffect, useRef } from "react";
import axios from "axios";
import { differenceWith, flatMap, isEqual, toPairs } from "lodash";

import { addSeatAction, inputChangeAction, removeSeatAction, requestAction } from "../../../../model";

import { fetchRequest, nextRequest } from "../../helpers";
import { handleError } from "../../../../model/actions";


export const useResContainer = ({ BASE_URL, inputValues, dispatch }) => {
  const historyState = useRef({});

  useEffect(() => {
    historyState.current = inputValues;
    axios
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
        dispatch(
          handleError({ message: error.message, time: new Date().getTime() })
        )
      );
  }, []);

  useEffect(() => {
    const diff = flatMap(
      differenceWith(
        toPairs(inputValues),
        toPairs(historyState.current),
        isEqual
      )
    )[0];

    fetchRequest({
      types: nextRequest(inputValues.auditorium, inputValues.screening)[diff],
      action: requestAction,
      baseUrl: BASE_URL,
      dispatch,
    });
  }, [inputValues]);

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
