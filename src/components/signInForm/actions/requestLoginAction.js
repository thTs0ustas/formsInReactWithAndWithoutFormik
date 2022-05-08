import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const requestLogin = createAction(actionTypes.REQUEST_LOGIN);

export default requestLogin;
