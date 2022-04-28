import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const requestLogin = createAction(actionTypes.REQUEST_LOGIN);

export default requestLogin;
