import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const checkoutAction = createAction(actionTypes.CHECKOUT);

export default checkoutAction;
