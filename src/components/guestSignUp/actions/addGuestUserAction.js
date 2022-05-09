import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const addGuestUserAction = createAction(actionTypes.ADD_GUEST_USER);

export default addGuestUserAction;
