import { reduce } from "lodash";

const price = (seat) => (seat ? reduce(seat, (sum, seat) => sum + seat.cost, 0) : 0).toFixed(2);

const setScreeningString = (start, end, date) => `
      ${new Date(date).toDateString()}
      ${new Date(start).toISOString().split("T")[1].slice(0, 5)} - 
      ${new Date(end).toISOString().split("T")[1].slice(0, 5)}`;

export { price, setScreeningString };
