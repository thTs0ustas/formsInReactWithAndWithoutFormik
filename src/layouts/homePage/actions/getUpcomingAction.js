import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const getUpcomingAction = createAction(actionTypes.GET_UPCOMING_MOVIES);

export default getUpcomingAction;
