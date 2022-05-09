import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const moviesByGenreAction = createAction(actionTypes.GET_MOVIES_BY_GENRE);

export default moviesByGenreAction;
