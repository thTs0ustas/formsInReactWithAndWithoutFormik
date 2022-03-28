import { keys, reduce } from "lodash";

const PRICING = {
  adult: 15,
  child: 12,
  member: 11,
};

const price = (tickets) =>
  reduce(
    keys(tickets).slice(0, -1),
    (sum, ticket) => sum + PRICING[ticket] * tickets[ticket],
    0
  ).toFixed(2);

const setScreeningString = (start, end, date) => `
      ${new Date(date).toDateString()}
      ${new Date(start).toISOString().split("T")[1].slice(0, 5)} - 
      ${new Date(end).toISOString().split("T")[1].slice(0, 5)}`;

export { price, setScreeningString };
