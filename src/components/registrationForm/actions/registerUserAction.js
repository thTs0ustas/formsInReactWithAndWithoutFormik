import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const registerUser = createAction(actionTypes.REGISTER_USER);

export default registerUser;
