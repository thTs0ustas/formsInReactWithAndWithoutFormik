import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../rModel/actions/actionTypes";

export const updateScreeningsAction = createAction(actionTypes.UPDATE_ADMIN_SCREENING);
