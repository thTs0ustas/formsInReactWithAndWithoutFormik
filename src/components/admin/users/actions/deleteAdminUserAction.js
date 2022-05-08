import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const deleteAdminUserAction = createAction(actionTypes.DELETE_ADMIN_USER);
