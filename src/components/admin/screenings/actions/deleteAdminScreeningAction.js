import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const deleteAdminScreeningAction = createAction(actionTypes.DELETE_ADMIN_SCREENING);
