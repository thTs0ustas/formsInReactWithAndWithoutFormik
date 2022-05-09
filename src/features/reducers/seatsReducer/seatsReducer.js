import { createSlice } from "@reduxjs/toolkit";
import { filter } from "lodash/fp";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "seats",
  storage,
};

const seatsReducer = createSlice({
  name: "seats",
  initialState: {
    seats: {},
    seatToTicket: {
      member: 0,
      adult: 0,
      child: 0,
      student: 0,
      sum: 0,
    },
    reserved: [],
    error: null,
  },
  reducers: {
    addTicket: (state, action) => {
      state.seatToTicket[action.payload] += 1;
      state.seatToTicket.sum += 1;
    },
    removeTicket: (state, action) => {
      state.seatToTicket[action.payload] -= 1;
      state.seatToTicket.sum -= 1;
    },
    addSeat: (state, action) => {
      const { adult, child, member, student } = state.seatToTicket;
      const adultSeat = filter({ discount_type: "adult" })(state.seats);
      const childSeat = filter({ discount_type: "child" })(state.seats);
      const memberSeat = filter({ discount_type: "member" })(state.seats);
      const studentSeat = filter({ discount_type: "student" })(state.seats);

      if (adultSeat.length < adult)
        state.seats[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "adult",
        };
      else if (childSeat.length < child)
        state.seats[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "child",
        };
      else if (memberSeat.length < member)
        state.seats[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "member",
        };
      else if (studentSeat.length < student)
        state.seats[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "student",
        };
    },
    removeSeat: (state, action) => {
      delete state.seats[action.payload];
    },
    addReserved: (state, action) => {
      state.reserved = action.payload;
    },
    clearSeats: (state) => {
      state.seats = {};
      state.seatToTicket = {
        member: 0,
        adult: 0,
        child: 0,
        student: 0,
        sum: 0,
      };
      state.reserved = [];
      state.error = null;
    },
  },
});
const persistedReducer = persistReducer(persistConfig, seatsReducer.reducer);
export const { addSeat, removeSeat, addTicket, removeTicket, addReserved, clearSeats } =
  seatsReducer.actions;
export default persistedReducer;
