import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const logoutAction = createAction(actionTypes.LOGOUT);

export default logoutAction;
