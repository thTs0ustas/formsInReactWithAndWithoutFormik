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
  updateAdminMovies,
  updateAdminIndividualMovie,
  deleteMovie,
  setAdminNotPlayingMovies,
  setAdminMoviesOfTheMonth,
  setAdminUsers,
  clearAdmin,
} = adminReducer.actions;

export default adminReducer.reducer;
