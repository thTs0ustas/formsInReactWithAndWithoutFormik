import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const logoutAction = createAction(actionTypes.LOGOUT);

export default logoutAction;
