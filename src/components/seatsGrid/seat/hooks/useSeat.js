import { keys, some } from "lodash";
import { selectors, useProvider } from "../../../../model";
import { handleSeatAdd, handleSeatRemove } from "../../../reservation/helpers";

export const useSeat = (id, seatInfo) => {
  const [{ seat, sum, reservedSeats, screening }, dispatch] = useProvider([
    selectors.resReserved,
    selectors.inputScreenings,
    selectors.inputSum,
    selectors.inputSeats,
  ]);

  const exists = !!seat[id];

  const isAlreadyTaken = some(
    reservedSeats?.[screening.split(",")[0]],
    (item) => item.seats_id === id
  );

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (exists) handleSeatRemove(dispatch)(id);
    else if (keys(seat).length < sum) handleSeatAdd(dispatch)(seatInfo);
  };
  return { isAlreadyTaken, handleClick, seat, exists };
};
