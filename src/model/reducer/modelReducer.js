import { omit } from "lodash";
import { actionTypes } from "../actions/action";

const reservationReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.userLogin:
      return {
        ...state,
        userInfo: payload,
      };
    case actionTypes.userLogout:
      return {
        ...state,
        userInfo: {},
      };
    case actionTypes.request:
      return {
        ...state,
        requests: {
          ...state.requests,
          [payload.key]: payload.value,
        },
      };
    case actionTypes.addSeat:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          seat: { ...state.inputValues.seat, [payload.value.id]: payload.value },
        },
      };
    case actionTypes.removeSeat:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          seat: omit(state.inputValues.seat, [`${payload}`]), //.inputValues.seat.filter((s) => s.id === payload.id),
        },
      };
    case actionTypes.reservedSeats:
      return {
        ...state,
        requests: {
          ...state.requests,
          reservedSeats: [...payload.value],
        },
      };
    case actionTypes.inputChange:
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [payload.name]: payload.value,
        },
      };

    case actionTypes.response:
      return { ...state, response: payload };
    case actionTypes.newTicket:
      return { ...state, ticket: payload };
    default:
      return state;
  }
};

export { reservationReducer };
