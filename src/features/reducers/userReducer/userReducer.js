import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
};

const userReducer = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: null,
    first_name: null,
    last_name: null,
    email: null,
    address: null,
    postal: null,
    birth_date: null,
    isAdmin: false,
    isLoggedIn: false,
    error: null,
    isMember: false,
    token: null,
    tickets: [],
    history: [],
  },
  reducers: {
    createUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.postal = action.payload.postal;
      state.birth_date = action.payload.birth_date;
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.isMember = true;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.postal = action.payload.postal;
      state.birth_date = action.payload.birth_date;
      state.isMember = action.payload.isMember;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
      state.isLoggedIn = true;
    },
    updateUser: (state, action) => {
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.postal = action.payload.postal;
      state.birth_date = action.payload.birth_date;
    },

    setUserError: (state, action) => {
      state.error = action.payload;
    },
    setUserLogout: (state) => {
      state.id = null;
      state.username = null;
      state.first_name = null;
      state.last_name = null;
      state.email = null;
      state.isMember = false;
      state.token = null;
      state.isAdmin = false;
      state.isLoggedIn = false;
      state.error = null;
    },
    setTickets: (state, action) => {
      state.tickets.push(action.payload);
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, userReducer.reducer);
export const {
  setUser,
  setUserError,
  setUserLogout,
  createUser,
  setTickets,
  updateUser,
  setHistory,
} = userReducer.actions;
export default persistedReducer;
