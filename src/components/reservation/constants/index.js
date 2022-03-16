const BASE_URL = "http://localhost:4000";
const INITIAL_STATE = {
  inputValues: {
    cinema: "",
    auditorium: "",
    movie: "",
    screening: "",
    seat: "",
  },
  requests: {
    cinemas: [],
    auditoriums: [],
    movies: [],
    screenings: [],
    seats: [],
  },
  response: null,
};

export { BASE_URL, INITIAL_STATE };
