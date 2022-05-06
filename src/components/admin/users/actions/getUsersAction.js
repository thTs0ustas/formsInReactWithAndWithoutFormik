import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

export const getUsersAction = createAction(actionTypes.GET_ADMIN_USERS);
