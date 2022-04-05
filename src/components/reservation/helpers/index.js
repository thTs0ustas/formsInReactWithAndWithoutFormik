import { keys, isEmpty, reduce, forEach } from "lodash";
import axios from "axios";

export const PRICING = {
  adult: 15,
  child: 12,
  member: 11,
};

const price = (tickets) =>
  reduce(
    keys(tickets).slice(0, -1),
    (sum, ticket) => sum + PRICING[ticket] * tickets[ticket],
    0
  );

const setScreeningString = (start, end, date) => `
      ${new Date(date).toDateString()}
      ${new Date(start).toISOString().split("T")[1].slice(0, 5)} - 
      ${new Date(end).toISOString().split("T")[1].slice(0, 5)}`;

const disabledIncrement = (nValues, requests) =>
  isEmpty(requests.seats) ||
  requests.seats?.length === requests.reservedSeats?.length ||
  requests.seats?.length - requests.reservedSeats?.length === nValues.sum;

const disabledDecrement = (requests) =>
  isEmpty(requests?.seats) ||
  requests.seats?.length === requests.reservedSeats?.length;

const fetchRequest =
  ({ types, action }) =>
  ({ dispatch, baseUrl }) => {
    forEach(
      types?.split(" "),
      (type) =>
        type &&
        axios.get(`${baseUrl}/${type}`).then((response) => {
          dispatch(
            action({
              key:
                type.split("/")[0] === "seat" ||
                type.split("/")[0] === "reservedSeat"
                  ? `${type.split("/")[0]}s`
                  : `${type}s`,
              value: response.data,
            })
          );
        })
    );
  };

const nextRequest = (aId = null, sId = null) => ({
  movie: "cinema",
  cinema: "auditorium",
  auditorium: "screening",
  screening: `seat/${aId[0]} reservedSeat/${sId} `,
});

export {
  price,
  setScreeningString,
  disabledIncrement,
  disabledDecrement,
  fetchRequest,
  nextRequest,
};
