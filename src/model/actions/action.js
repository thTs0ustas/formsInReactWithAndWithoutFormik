import { actionTypes } from "./actionTypes";

const initStore = (payload) => ({
  type: actionTypes.initStore,
  payload,
});
const requestAction = (payload) => ({
  type: actionTypes.request,
  payload,
});
const inputChangeAction = (payload) => ({
  type: actionTypes.inputChange,
  payload,
});
const addSeatAction = (payload) => ({
  type: actionTypes.addSeat,
  payload,
});
const removeSeatAction = (payload) => ({
  type: actionTypes.removeSeat,
  payload,
});
const addTicketAction = (payload) => ({
  type: actionTypes.addTicket,
  payload,
});

const removeTicketAction = (payload) => ({
  type: actionTypes.removeTicket,
  payload,
});
const reservedSeatsAction = (payload) => ({
  type: actionTypes.reservedSeats,
  payload,
});
const responseAction = (payload) => ({
  type: actionTypes.response,
  payload,
});
const userLoginAction = (payload) => ({
  type: actionTypes.userLogin,
  payload,
});
const userLogoutAction = (payload) => ({
  type: actionTypes.userLogout,
  payload,
});

const newTicketAction = (payload) => ({
  type: actionTypes.newTicket,
  payload,
});

const resetReservation = () => ({
  type: actionTypes.resetReservation,
});
const changeTheme = () => ({
  type: actionTypes.changeTheme,
});
const handleError = (payload) => ({
  type: actionTypes.newError,
  payload,
});

export {
  handleError,
  initStore,
  changeTheme,
  resetReservation,
  addSeatAction,
  newTicketAction,
  removeSeatAction,
  requestAction,
  reservedSeatsAction,
  responseAction,
  userLoginAction,
  userLogoutAction,
  inputChangeAction,
  addTicketAction,
  removeTicketAction,
};
