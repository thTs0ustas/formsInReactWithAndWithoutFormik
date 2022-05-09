import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const getUsersAction = createAction(actionTypes.GET_ADMIN_USERS);
