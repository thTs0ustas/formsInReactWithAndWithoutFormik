import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const updateUserAction = createAction(actionTypes.UPDATE_USER);

export default updateUserAction;
