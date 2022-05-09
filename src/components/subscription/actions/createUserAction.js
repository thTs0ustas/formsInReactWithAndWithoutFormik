import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const createUserAction = createAction(actionTypes.CREATE_USER);

export default createUserAction;
