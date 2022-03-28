import { actionTypes } from "../actions/action";
import produce from "immer";



const reservationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.userLogin:
      return produce(state,draft=> {
        draft.userInfo = payload;
      });
    case actionTypes.userLogout:
      return produce(state,draft=> {
        draft.userInfo = {};
      });
    case actionTypes.request:
      return produce(state,draft=> {
        draft.reservation.requests[payload.key] = payload.value;
      });

    case actionTypes.addSeat:
      return produce(state,draft=> {
        draft.reservation.inputValues.seat[payload.value.id] = payload.value;
      });


    case actionTypes.removeSeat:
      return produce(state,draft=> {
        delete draft.reservation.inputValues.seat[payload]
      });

    case actionTypes.reservedSeats:
      return produce(state,draft=> {
        draft.reservation.requests.reservedSeats = payload.value;
      });


    case actionTypes.inputChange:
      return produce(state,draft=> {
        draft.reservation.inputValues[payload.name] = payload.value;
      });


    case actionTypes.response:
      return produce(state,draft=> {
        draft.reservation.response = payload
      });


    case actionTypes.newTicket:
      return produce(state,draft=> {
        draft.reservation.ticket = payload
      });

    default:
      return state;
  }
};



export const modelReducer = reservationReducer
