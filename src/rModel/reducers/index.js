import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import adminReducer from "./adminReducer/adminReducer";
import reservationReducer from "./reservationReducer/reservationReducer";
import seatReducer from "./seatsReducer/seatsReducer";
import movieInfoReducer from "./miscReducer/miscReducer";
import errorReducer from "./errorReducer/errorReducer";

export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  reservation: reservationReducer,
  seat: seatReducer,
  movieInfo: movieInfoReducer,
  error: errorReducer,
});
