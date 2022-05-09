import { useEffect } from "react";
import { isEmpty, map, random } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { clearReservation, clearSeats, setTickets } from "../../../features";

export const useTicket = () => {
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.reservation);
  const { movies } = useSelector((state) => state.reservation.requests);

  const barcode = () => {
    const numbers = map(Array(12), () => random(0, 9));
    const barcodeSchema = map(Array(152), () => random(0, 1));
    return { barcodeSchema, numbers };
  };

  console.log(response);
  useEffect(() => {
    if (!isEmpty(response)) {
      const { userWithNewRes, reservedSeats } = response;
      const payload = {
        image: movies?.image,
        title: movies?.title,
        userid: userWithNewRes?.id,
        reservationId: userWithNewRes.Reservations.at(-1).id,
        hall: userWithNewRes.Reservations[0].Screening.auditorium_id,
        date: userWithNewRes.Reservations[0].Screening.movie_date.split("T")[0],
        start: userWithNewRes.Reservations[0].Screening.movie_starts.split("T")[1].slice(0, 5),
        seats: reservedSeats.map((seat) => ({
          id: seat.Seat.id,
          cost: seat.cost,
          row: seat.Seat.row_letter,
          number: seat.Seat.seat_num,
          barcode: barcode().barcodeSchema.join(""),
          numbers: barcode().numbers.join(""),
        })),
      };

      dispatch(setTickets(payload));
    }
    return () => {
      dispatch(clearReservation());
      dispatch(clearSeats());
    };
  }, [response]);
};
