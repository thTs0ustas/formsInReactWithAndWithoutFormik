import { createSlice } from "@reduxjs/toolkit";

const errorReducer = createSlice({
  name: "admin",
  initialState: {
    message: "",
    time: 0,
  },
  reducers: {
    setError: (state, action) => {
      state.message = action.payload.message;
      state.time = action.payload.time;
    },
    clearError: (state) => {
      state.message = "";
      state.time = 0;
    },
  },
});
export const { setError, clearError } = errorReducer.actions;
export default errorReducer.reducer;
