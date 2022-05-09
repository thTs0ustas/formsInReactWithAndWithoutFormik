import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const updateUserAction = createAction(actionTypes.UPDATE_USER);

export default updateUserAction;
