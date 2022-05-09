import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "reservation",
  storage,
};

const reservationReducer = createSlice({
  name: "reservation",
  initialState: {
    requests: {},
    inputValues: {
      movie: "",
      cinema: "",
      auditorium: "",
      screening: "",
    },
    response: {},
  },
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    setInputValues: (state, action) => {
      state.inputValues[action.payload.name] = action.payload.value;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    clearReservation: (state) => {
      state.requests = {};
      state.inputValues = {
        movie: "",
        cinema: "",
        auditorium: "",
        screening: "",
      };
      state.response = {};
    },
  },
});
const persistedReducer = persistReducer(persistConfig, reservationReducer.reducer);
export const { setRequests, setInputValues, setResponse, clearReservation } =
  reservationReducer.actions;
export default persistedReducer;
