import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const updateScreeningsAction = createAction(actionTypes.UPDATE_ADMIN_SCREENING);
