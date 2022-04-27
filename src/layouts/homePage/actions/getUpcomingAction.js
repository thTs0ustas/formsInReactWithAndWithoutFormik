import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const getUpcomingAction = createAction(actionTypes.GET_UPCOMING_MOVIES);

export default getUpcomingAction;
