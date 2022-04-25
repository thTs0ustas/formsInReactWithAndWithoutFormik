import { isEmpty } from "lodash";

const disabledIncrement = (nValues, { seats, reservedSeats }) => {
  return (
    isEmpty(seats) ||
    seats?.length === reservedSeats?.length ||
    seats?.length - reservedSeats?.length === nValues.sum
  );
};
const disabledDecrement = ({ seats, reservedSeats }) =>
  isEmpty(seats) || seats?.length === reservedSeats?.length;

export { disabledIncrement, disabledDecrement };
