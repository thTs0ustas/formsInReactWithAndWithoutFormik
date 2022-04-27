import { actionTypes } from "../../../rModel/actions/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const checkoutAction = createAction(actionTypes.CHECKOUT);

export default checkoutAction;
