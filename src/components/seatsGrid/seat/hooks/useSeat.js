import { keys, some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { handleSeatAdd, handleSeatRemove } from "../../../reservation/helpers";

export const useSeat = (id, seatInfo) => {
  const dispatch = useDispatch();
  const {
    seats,
    seatToTicket: { sum },
  } = useSelector((state) => state.seat);
  const { reservedSeats } = useSelector((state) => state.reservation.requests);
  const { screening } = useSelector((state) => state.reservation.inputValues);

  const exists = !!seats[id];

  const isAlreadyTaken = some(
    reservedSeats?.[screening.split(",")[0]],
    (item) => item.seats_id === id
  );

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (exists) handleSeatRemove(dispatch)(id);
    else if (keys(seats).length < sum) handleSeatAdd(dispatch)(seatInfo);
  };
  return { isAlreadyTaken, handleClick, exists };
};
