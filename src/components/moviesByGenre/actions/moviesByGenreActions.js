import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const moviesByGenreAction = createAction(actionTypes.GET_MOVIES_BY_GENRE);

export default moviesByGenreAction;
