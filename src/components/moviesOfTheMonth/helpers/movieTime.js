import { map, sortBy } from "lodash";

const movieTime = (screenings) => [
  ...new Set(sortBy(map(screenings, (item) => item.movie_starts.split("T")[1].slice(0, 5)))),
];

export { movieTime };
