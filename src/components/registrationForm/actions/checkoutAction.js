import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../rModel/actions/actionTypes";

const checkoutAction = createAction(actionTypes.CHECKOUT);

export default checkoutAction;
