import { selectors, useProvider } from "../../../../model";
import { keys, some } from "lodash";
import { handleSeatAdd, handleSeatRemove } from "../../../reservation/helpers";

export const useSeat = (id, seatInfo) => {
  const [{ seat, sum, reservedSeats, screening }, dispatch] = useProvider([
    selectors.resReserved,
    selectors.inputScreenings,
    selectors.inputSum,
    selectors.inputSeats,
  ]);

  const exists = !!seat[id];
  console.log(reservedSeats);
  const isAlreadyTaken = some(reservedSeats?.[screening], (item) => item["seats_id"] === id);

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    exists
      ? handleSeatRemove(dispatch)(id)
      : keys(seat).length < sum && handleSeatAdd(dispatch)(seatInfo);
  };
  return { isAlreadyTaken, handleClick, seat, exists };
};
