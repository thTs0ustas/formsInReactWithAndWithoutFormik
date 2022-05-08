import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const getHistoryAction = createAction(actionTypes.GET_HISTORY);

export default getHistoryAction;
