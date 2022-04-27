import { createSlice } from "@reduxjs/toolkit";

const moviePageReducer = createSlice({
  name: "moviePage",
  initialState: {
    movieInfo: {},
    nowShowing: [],
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
  },
});

export const { setMovieInfo, clearMovieInfo, getMovies } = moviePageReducer.actions;
export default moviePageReducer.reducer;
