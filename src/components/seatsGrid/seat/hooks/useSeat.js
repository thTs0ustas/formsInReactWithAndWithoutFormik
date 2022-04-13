import { useProvider } from "../../../../model";
import { keys, some } from "lodash";

export const useSeat = (seatInfo, handleSeatRemove, handleSeatAdd) => {
  const [state] = useProvider([
    "reservation.inputValues.numOfTickets.sum",
    "reservation.inputValues.seat",
    "reservation.inputValues.screening",
    "reservation.requests.reservedSeats",
  ]);
  const { seat, sum, reservedSeats, screening } = state;
  const exists = !!seat[seatInfo.id];

  const isAlreadyTaken = some(reservedSeats[screening], (item) => item["seats_id"] === seatInfo.id);

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    exists ? handleSeatRemove(seatInfo.id) : keys(seat).length < sum && handleSeatAdd(seatInfo);
  };
  return { isAlreadyTaken, handleClick, seat, exists };
};
