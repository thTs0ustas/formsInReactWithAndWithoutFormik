import { omit, set } from "lodash";
import { actionTypes } from "../actions/action";

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.userLogin:
      return set(state, "userInfo", payload);
    case actionTypes.userLogout:
      return set(state, "userInfo", {});
    default:
      return state;
  }
};

const reservationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.request:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          requests: {
            ...state.reservation.requests,
            [payload.key]: payload.value,
          },
        },
      };

    case actionTypes.addSeat:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          inputValues: {
            ...state.reservation.inputValues,
            seat: { ...state.reservation.inputValues.seat, [payload.value.id]: payload.value },
          },
        },
      };

    case actionTypes.removeSeat:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          inputValues: {
            ...state.reservation.inputValues,
            seat: omit(state.reservation.inputValues.seat, [`${payload}`]), //.inputValues.seat.filter((s) => s.id === payload.id),
          },
        },
      };

    case actionTypes.reservedSeats:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          requests: {
            ...state.reservation.requests,
            reservedSeats: [...payload.value],
          },
        },
      };

    case actionTypes.inputChange:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          inputValues: {
            ...state.reservation.inputValues,
            [payload.name]: payload.value,
          },
        },
      };

    case actionTypes.response:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          response: payload,
        },
      };

    case actionTypes.newTicket:
      return {
        ...state,
        reservation: {
          ...state.reservation,
          ticket: payload,
        },
      };
    case actionTypes.search:
      return {
        ...state,
        search: {
          ...state.search,
          payload,
        },
      };
    default:
      return state;
  }
};

const combineReducers =
  (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

export const modelReducer = combineReducers(reservationReducer, userReducer);
