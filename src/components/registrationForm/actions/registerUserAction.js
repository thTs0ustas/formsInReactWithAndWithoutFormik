import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const registerUser = createAction(actionTypes.REGISTER_USER);

export default registerUser;
