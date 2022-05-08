import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const updateUserAction = createAction(actionTypes.UPDATE_ADMIN_USERS);
