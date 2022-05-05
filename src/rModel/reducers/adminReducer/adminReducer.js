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
    updateAdminMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    updateAdminIndividualMovie: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id) movie = action.payload;
        return movie;
      });
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    setAdminNotPlayingMovies: (state, action) => {
      state.notPlayingMovies = action.payload;
    },
    setAdminMoviesOfTheMonth: (state, action) => {
      state.moviesOfTheMonth = action.payload;
    },
    updateAdminMoviesOfTheMonth: (state, action) => {
      state.moviesOfTheMonth = action.payload;
    },
    deleteMovieOfTheMonth: (state, action) => {
      state.moviesOfTheMonth = state.moviesOfTheMonth.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setAdminUsers: (state, action) => {
      state.users = action.payload;
    },
    updateAdminUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
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
  updateAdminMovies,
  updateAdminIndividualMovie,
  deleteMovieOfTheMonth,
  deleteMovie,
  setAdminNotPlayingMovies,
  setAdminMoviesOfTheMonth,
  updateAdminMoviesOfTheMonth,
  setAdminUsers,
  deleteUser,
  updateAdminUsers,
  clearAdmin,
} = adminReducer.actions;

export default adminReducer.reducer;
