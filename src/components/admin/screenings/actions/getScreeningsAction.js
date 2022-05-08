import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../../features/actions/actionTypes";

export const getScreeningsAction = createAction(actionTypes.GET_ADMIN_SCREENING);
