import { isEmpty } from "lodash";

const disabledIncrement = (nValues, { seats, reservedSeats }) => {
  const seatsLength = seats?.length;
  const reservedSeatsLength = reservedSeats?.length;
  return (
    isEmpty(seats) ||
    seatsLength === reservedSeatsLength ||
    seatsLength - reservedSeatsLength === nValues.sum
  );
};
const disabledDecrement = ({ seats, reservedSeats }) =>
  isEmpty(seats) || seats?.length === reservedSeats?.length;

export { disabledIncrement, disabledDecrement };
