import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const addScreeningAction = createAction(actionTypes.ADD_ADMIN_SCREENING);
