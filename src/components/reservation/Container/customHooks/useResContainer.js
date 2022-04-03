import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  addSeatAction,
  inputChangeAction,
  removeSeatAction,
  requestAction,
} from "../../../../model";
import { differenceWith, isEqual, toPairs } from "lodash";
import { fetchRequest, nextRequest } from "../../helpers";

export const useResContainer = ({ BASE_URL, inputValues, dispatch }) => {
  const historyState = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/login");
    }

    historyState.current = inputValues;
    axios.get(`${BASE_URL}/movies`).then((response) => {
      dispatch(
        requestAction({
          key: "movies",
          value: response.data,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const diff = differenceWith(
      toPairs(inputValues),
      toPairs(historyState.current),
      isEqual
    )[0]?.[0];

    fetchRequest({
      types: nextRequest(inputValues.auditorium, inputValues.screening)[diff],
      action: requestAction,
    })({ dispatch, baseUrl: BASE_URL });
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
