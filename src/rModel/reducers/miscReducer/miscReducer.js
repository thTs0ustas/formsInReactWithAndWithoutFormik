import { createSlice } from "@reduxjs/toolkit";

const miscReducer = createSlice({
  name: "movieInfo",
  initialState: {},
  reducers: {
    setMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    clearMovieInfo: (state, action) => {
      state.movieInfo = {};
    },
  },
});

export const { setMovieInfo, clearMovieInfo } = miscReducer.actions;
export default miscReducer.reducer;
