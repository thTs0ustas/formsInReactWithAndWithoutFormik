import { createSlice } from "@reduxjs/toolkit";

const moviePageReducer = createSlice({
  name: "moviePage",
  initialState: {
    movieInfo: {},
    nowShowing: [],
    todayMovies: [],
    moviesByGenre: [],
  },
  reducers: {
    setMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    clearMovieInfo: (state) => {
      state.movieInfo = {};
    },
    getMovies: (state, action) => {
      state.nowShowing = action.payload;
    },
    getTodayMovies: (state, action) => {
      state.todayMovies = action.payload;
    },
    getMoviesByGenre: (state, action) => {
      state.moviesByGenre = action.payload;
    },
    clearMoviesByGenre: (state) => {
      state.moviesByGenre = [];
    },
  },
});

export const {
  setMovieInfo,
  clearMovieInfo,
  getMovies,
  getTodayMovies,
  getMoviesByGenre,
  clearMoviesByGenre,
} = moviePageReducer.actions;
export default moviePageReducer.reducer;
