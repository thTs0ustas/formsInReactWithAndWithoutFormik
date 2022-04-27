import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const requestLogin = createAction(actionTypes.REQUEST_LOGIN);

export default requestLogin;
