import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: null,
    email: null,
    isAdmin: false,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isMember: false,
    token: null,
    tickets: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
      state.isLoggedIn = true;
      state.error = null;
      state.isMember = action.payload.isMember;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
      state.isLoggedIn = true;
      state.error = null;
      state.isMember = action.payload.isMember;
      state.token = action.payload.token;
    },

    setUserError: (state, action) => {
      state.error = action.payload;
    },
    setUserLogout: (state, action) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.isAdmin = false;
      state.isLoggedIn = false;
      state.error = null;
      state.isMember = false;
      state.token = null;
    },
    setTickets: (state, action) => {
      state.tickets = action.payload;
    },
  },
});
export const { setUser, setUserError, setUserLogout } = userReducer.actions;
export default userReducer.reducer;
