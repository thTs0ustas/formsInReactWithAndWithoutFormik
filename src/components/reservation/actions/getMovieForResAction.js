import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const getMovieForResAction = createAction(actionTypes.GET_MOVIE_FOR_RESERVATION);

export { getMovieForResAction };
