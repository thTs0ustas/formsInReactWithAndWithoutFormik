import { createSlice } from "@reduxjs/toolkit";

const reservationReducer = createSlice({
  name: "reservation",
  initialState: {
    requests: {},
    inputValues: {},
    response: {},
  },
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    setInputValues: (state, action) => {
      state.inputValues[action.payload.name] = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    clearReservation: (state) => {
      state.requests = {};
      state.inputValues = {};
      state.response = {};
    },
  },
});

export const { setRequests, setInputValues, setResponse, clearReservation } =
  reservationReducer.actions;
export default reservationReducer.reducer;
