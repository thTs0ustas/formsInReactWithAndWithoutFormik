import { actionTypes } from "../actions";
import produce from "immer";
import { INITIAL_STATE } from "../constants/constants";

export const modelReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.userLogin:
      return produce(state, (draft) => {
        draft.userInfo.username = payload.username;
        draft.userInfo.token = payload.token;
      });
    case actionTypes.userLogout:
      return produce(state, (draft) => {
        draft.userInfo = {};
      });
    case actionTypes.request:
      return produce(state, (draft) => {
        draft.reservation.requests[payload.key] = payload.value;
      });

    case actionTypes.addSeat:
      return produce(state, (draft) => {
        draft.reservation.inputValues.seat[payload.value.id] = payload.value;
      });

    case actionTypes.addTicket:
      return produce(state, (draft) => {
        draft.reservation.inputValues.numOfTickets[payload] += 1;
        draft.reservation.inputValues.numOfTickets.sum += 1;
      });

    case actionTypes.removeTicket:
      return produce(state, (draft) => {
        draft.reservation.inputValues.numOfTickets[payload] -= 1;
        draft.reservation.inputValues.numOfTickets.sum -= 1;
      });

    case actionTypes.removeSeat:
      return produce(state, (draft) => {
        delete draft.reservation.inputValues.seat[payload];
      });

    case actionTypes.reservedSeats:
      return produce(state, (draft) => {
        draft.reservation.requests.reservedSeats = payload.value;
      });

    case actionTypes.inputChange:
      return produce(state, (draft) => {
        draft.reservation.inputValues[payload.name] = payload.value;
      });

    case actionTypes.response:
      return produce(state, (draft) => {
        draft.reservation.response = payload;
      });
    case actionTypes.resetReservation:
      return produce(state, (draft) => {
        draft.reservation = INITIAL_STATE.reservation;
      });

    case actionTypes.newTicket:
      return produce(state, (draft) => {
        draft.userInfo.tickets.push(payload);
      });

    case actionTypes.getMoviesForHome:
      return produce(state, (draft) => {
        draft.homepage.movies.push(payload);
      });

    case actionTypes.changeTheme:
      return produce(state, (draft) => {
        draft.theme = !draft.theme;
      });
    default:
      return state;
  }
};
