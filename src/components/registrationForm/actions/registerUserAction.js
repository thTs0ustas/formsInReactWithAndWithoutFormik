import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const registerUser = createAction(actionTypes.REGISTER_USER);

export default registerUser;
