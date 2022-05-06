import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const createUserAction = createAction(actionTypes.CREATE_USER);

export default createUserAction;
