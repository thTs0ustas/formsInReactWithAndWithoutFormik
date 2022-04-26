import { createSlice } from "@reduxjs/toolkit";

const seatsReducer = createSlice({
  name: "seats",
  initialState: {
    seats: {},
    ticket: {
      member: 0,
      nonMember: 0,
      child: 0,
      student: 0,
      total: 0,
    },
    reserved: [],
    error: null,
  },
  reducers: {
    addSeats: (state, action) => {
      state.seats = action.payload;
    },
    removeSeat: (state, action) => {
      const { id } = action.payload;
      delete state.seats[id];
    },
    addTicket: (state, action) => {
      state.tickets[action.payload]++;
      state.tickets.total++;
    },
    removeTicket: (state, action) => {
      state.tickets[action.payload]--;
      state.tickets.total--;
    },
    addReserved: (state, action) => {
      state.reserved = action.payload;
    },
  },
});

export const { addSeats, removeSeat, addTicket, removeTicket, addReserved } = seatsReducer.actions;
export default seatsReducer.reducer;
