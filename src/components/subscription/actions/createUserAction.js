import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const createUserAction = createAction(actionTypes.CREATE_USER);

export default createUserAction;
