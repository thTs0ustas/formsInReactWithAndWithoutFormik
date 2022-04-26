import { map, sortBy } from "lodash";

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let movieDates = (screenings) => [
  ...new Set(map(screenings, (item) => days[new Date(item.movie_date).getDay()])),
];
let movieTime = (screenings) => [
  ...new Set(sortBy(map(screenings, (item) => item.movie_starts.split("T")[1].slice(0, 5)))),
];

export { movieDates, movieTime };
