import { actionTypes } from "../actions";
import produce from "immer";
import { INITIAL_STATE } from "../constants/constants";
import { filter } from "lodash/fp";
import { forEach, map, omit } from "lodash";

export const modelReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.initStore:
      return produce(state, () => {
        return payload;
      });
    case actionTypes.clearAdmin:
      return produce(state, (draft) => {
        draft.admin = INITIAL_STATE.admin;
      });
    case actionTypes.userLogin:
      return produce(state, (draft) => {
        draft.userInfo.username = payload.username;
        draft.userInfo.token = payload.token;
        draft.userInfo.isMember = payload.isMember;
        draft.userInfo.isAdmin = payload.isAdmin;
        draft.userInfo.id = payload.id;
        draft.userInfo.reviews = {};
        draft.userInfo.tickets = [];
      });
    case actionTypes.userUpdate:
      return produce(state, (draft) => {
        draft.userInfo.username = payload.username;
      });
    case actionTypes.userLogout:
      return produce(state, (draft) => {
        draft.userInfo = {};
      });

    case actionTypes.request:
      let seats = {};
      let reservedSeats = {};
      return produce(state, (draft) => {
        const {
          movie: { Movie },
          screenings,
          auditoriums,
        } = payload;
        forEach(auditoriums, (item) => {
          seats[item.id] = item.Seats;
        });
        forEach(screenings, (item) => {
          reservedSeats[item.id] = item.ReservedSeats;
        });

        draft.reservation.requests = {
          movies: Movie,
          cinemas: map(auditoriums, (item) => item["Cinema"]),
          auditoriums: map(auditoriums, (item) => omit(item, ["Cinema", "Seats"])),
          screenings: map(screenings, (item) => omit(item, ["ReservedSeats"])),
          seats,
          reservedSeats,
        };
      });

    case actionTypes.addSeat:
      return produce(state, (draft) => {
        let { adult, child, member, student } = state.reservation.inputValues.numOfTickets;
        let adultSeat = filter({ discount_type: "adult" })(state.reservation.inputValues.seat);
        let childSeat = filter({ discount_type: "child" })(state.reservation.inputValues.seat);
        let memberSeat = filter({ discount_type: "member" })(state.reservation.inputValues.seat);
        let studentSeat = filter({ discount_type: "student" })(state.reservation.inputValues.seat);

        if (adultSeat.length < adult)
          draft.reservation.inputValues.seat[payload.value.id] = {
            ...payload.value,
            discount_type: "adult",
          };
        else if (childSeat.length < child)
          draft.reservation.inputValues.seat[payload.value.id] = {
            ...payload.value,
            discount_type: "child",
          };
        else if (memberSeat.length < member)
          draft.reservation.inputValues.seat[payload.value.id] = {
            ...payload.value,
            discount_type: "member",
          };
        else if (studentSeat.length < student)
          draft.reservation.inputValues.seat[payload.value.id] = {
            ...payload.value,
            discount_type: "student",
          };
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

    case actionTypes.getMoviesForNowShowing:
      return produce(state, (draft) => {
        draft.homepage.movies.push(payload);
      });

    case actionTypes.changeTheme:
      return produce(state, (draft) => {
        draft.theme = !draft.theme;
      });

    case actionTypes.newError:
      return produce(state, (draft) => {
        draft.error = payload;
      });

    case actionTypes.adminMovies:
      return produce(state, (draft) => {
        draft.admin.movies = payload;
      });
    case actionTypes.adminMoviesNotPlaying:
      return produce(state, (draft) => {
        draft.admin.moviesNotPlaying = payload;
      });
    case actionTypes.adminUsers:
      return produce(state, (draft) => {
        draft.admin.users = payload;
      });
    case actionTypes.adminMoviesOfTheMonth:
      return produce(state, (draft) => {
        draft.admin.moviesOfTheMonth = payload;
      });

    default:
      return state;
  }
};
