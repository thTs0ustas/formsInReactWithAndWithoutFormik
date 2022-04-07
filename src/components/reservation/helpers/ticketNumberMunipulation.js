import { isEmpty } from "lodash";

const disabledIncrement = (nValues, requests) =>
  isEmpty(requests.seats) ||
  requests.seats?.length === requests.reservedSeats?.length ||
  requests.seats?.length - requests.reservedSeats?.length === nValues.sum;

const disabledDecrement = (requests) =>
  isEmpty(requests?.seats) ||
  requests.seats?.length === requests.reservedSeats?.length;

export { disabledIncrement, disabledDecrement };
