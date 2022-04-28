import { filter, flow, keys, map, omit } from "lodash/fp";
import { PRICING } from "./pricing";

const dataForPayment = (tickets) =>
  flow(
    omit("sum"),
    keys,
    map((ticket) => {
      if (tickets[ticket] > 0) {
        return {
          name: `${ticket} ticket`.toUpperCase(),
          price: PRICING[ticket] * 100,
          quantity: tickets[ticket],
        };
      }
      return null;
    }),
    filter(null)
  )(tickets);

export { dataForPayment };
