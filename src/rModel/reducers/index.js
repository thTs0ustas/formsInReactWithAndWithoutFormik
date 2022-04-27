import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import adminReducer from "./adminReducer/adminReducer";
import reservationReducer from "./reservationReducer/reservationReducer";
import seatReducer from "./seatsReducer/seatsReducer";
import movieInfoReducer from "./moviePageReducer/moviePageReducer";
import errorReducer from "./errorReducer/errorReducer";

export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  reservation: reservationReducer,
  seat: seatReducer,
  nowPlaying: movieInfoReducer,
  error: errorReducer,
});
