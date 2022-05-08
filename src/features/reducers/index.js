import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import adminReducer from "./adminReducer/adminReducer";
import reservationReducer from "./reservationReducer/reservationReducer";
import seatReducer from "./seatsReducer/seatsReducer";
import movieInfoReducer from "./moviePageReducer/moviePageReducer";
import errorReducer from "./errorReducer/errorReducer";
import themeReducer from "./themeReducer/themeReducer";

export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  reservation: reservationReducer,
  seat: seatReducer,
  nowPlaying: movieInfoReducer,
  error: errorReducer,
  theme: themeReducer,
});

export {
  setAdminMovies,
  setAdminNotPlayingMovies,
  setAdminMoviesOfTheMonth,
  setAdminUsers,
  clearAdmin,
  deleteMovie,
  deleteUser,
  updateAdminUsers,
  addAdminScreening,
  setAdminScreenings,
  updateAdminScreenings,
  deleteScreening,
} from "./adminReducer/adminReducer";

export { setError, clearError } from "./errorReducer/errorReducer";
export {
  setMovieInfo,
  clearMovieInfo,
  getMovies,
  getTodayMovies,
  getMoviesByGenre,
  clearMoviesByGenre,
  getUpcomingMovies,
} from "./moviePageReducer/moviePageReducer";

export {
  setRequests,
  setInputValues,
  setResponse,
  clearReservation,
} from "./reservationReducer/reservationReducer";
export {
  addSeats,
  removeSeat,
  addTicket,
  removeTicket,
  addReserved,
} from "./seatsReducer/seatsReducer";
export {
  setUser,
  setUserError,
  setUserLogout,
  createUser,
  setTickets,
  updateUser,
  setHistory,
} from "./userReducer/userReducer";
export { setTheme } from "./themeReducer/themeReducer";
