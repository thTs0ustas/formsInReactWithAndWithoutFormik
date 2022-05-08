import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const getMovieForResAction = createAction(actionTypes.GET_MOVIE_FOR_RESERVATION);

export { getMovieForResAction };
