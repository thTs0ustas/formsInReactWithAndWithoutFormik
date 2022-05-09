import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../../../features/actions/actionTypes";

const paymentToTicketAction = createAction(actionTypes.PAYMENT_TO_TICKET_ACTION);

export { paymentToTicketAction };
