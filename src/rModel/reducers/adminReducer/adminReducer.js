import { createSlice } from "@reduxjs/toolkit";

const adminReducer = createSlice({
  name: "admin",
  initialState: {
    movies: [],
    notPlayingMovies: [],
    moviesOfTheMonth: [],
    users: [],
  },
  reducers: {
    setAdminMovies: (state, action) => {
      state.movies = action.payload;
    },
    setAdminNotPlayingMovies: (state, action) => {
      state.notPlayingMovies = action.payload;
    },
    setAdminMoviesOfTheMonth: (state, action) => {
      state.moviesOfTheMonth = action.payload;
    },
    setAdminUsers: (state, action) => {
      state.users = action.payload;
    },
    clearAdmin: (state) => {
      state.movies = [];
      state.notPlayingMovies = [];
      state.moviesOfTheMonth = [];
      state.users = [];
    },
  },
});

export const {
  setAdminMovies,
  setAdminNotPlayingMovies,
  setAdminMoviesOfTheMonth,
  setAdminUsers,
  clearAdmin,
} = adminReducer.actions;

export default adminReducer.reducer;
