const INITIAL_STATE = {
  BASE_URL: "http://localhost:4000",
  reservation: {
    inputValues: {
      cinema: "",
      auditorium: "",
      movie: "",
      screening: "",
      seat: {},
    },
    requests: {
      cinemas: [],
      auditoriums: [],
      movies: [],
      screenings: [],
      seats: [],
    },
  },
  response: null,
};

export { INITIAL_STATE };
