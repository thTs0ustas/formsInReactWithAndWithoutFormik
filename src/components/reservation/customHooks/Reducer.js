import { useReducer } from "react";
import { INITIAL_STATE } from "../constants";

const reservationReducer = (state, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return {
        ...state,
        requests: {
          ...state.requests,
          [payload.key]: payload.value,
        },
      };
    case "SEAT_ADD":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          seat: [...state.inputValues.seat, payload.value],
        },
      };
    case "SEAT_REMOVE":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          seat: state.inputValues.seat.filter((s) => s.id === payload.id),
        },
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [payload.name]: payload.value,
        },
      };

    case "RESPONSE":
      return { ...state, response: payload };
    default:
      return state;
  }
};

const useReservations = () => {
  const [state, dispatch] = useReducer(reservationReducer, INITIAL_STATE);
  return { state, dispatch };
};

export { reservationReducer, useReservations };
