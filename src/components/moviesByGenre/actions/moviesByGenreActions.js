import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const moviesByGenreAction = createAction(actionTypes.GET_MOVIES_BY_GENRE);

export default moviesByGenreAction;
