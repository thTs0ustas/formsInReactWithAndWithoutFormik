import { keys, reduce } from "lodash";

const PRICING = {
  student: 8,
  adult: 15,
  child: 12,
  member: 11,
};

const price = (tickets) =>
  reduce(keys(tickets).slice(0, -1), (sum, ticket) => sum + PRICING[ticket] * tickets[ticket], 0);

export { PRICING, price };
