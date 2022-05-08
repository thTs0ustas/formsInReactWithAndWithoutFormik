import { createSlice } from "@reduxjs/toolkit";
import { filter } from "lodash/fp";

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
        state.reservation.inputValues.seat[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "adult",
        };
      else if (childSeat.length < child)
        state.reservation.inputValues.seat[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "child",
        };
      else if (memberSeat.length < member)
        state.reservation.inputValues.seat[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "member",
        };
      else if (studentSeat.length < student)
        state.reservation.inputValues.seat[action.payload.value.id] = {
          ...action.payload.value,
          discount_type: "student",
        };
    },
    removeSeat: (state, action) => {
      state.tickets[action.payload] -= 1;
      state.tickets.total -= 1;
    },
    addReserved: (state, action) => {
      state.reserved = action.payload;
    },
  },
});

export const { addSeats, removeSeat, addTicket, removeTicket, addReserved } = seatsReducer.actions;
export default seatsReducer.reducer;
