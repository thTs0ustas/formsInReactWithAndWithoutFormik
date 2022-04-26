import { createSlice } from "@reduxjs/toolkit";

const miscReducer = createSlice({
  name: "movieInfo",
  initialState: {},
  reducers: {
    setMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
  },
});

export const { setMovieInfo } = miscReducer.actions;
export default miscReducer.reducer;
