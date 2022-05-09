import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const paymentAction = createAction(actionTypes.PAYMENT_ACTION);

export { paymentAction };
