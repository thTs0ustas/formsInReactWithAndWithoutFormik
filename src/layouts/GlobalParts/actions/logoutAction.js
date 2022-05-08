import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const logoutAction = createAction(actionTypes.LOGOUT);

export default logoutAction;
