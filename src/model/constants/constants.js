const INITIAL_STATE = {
  BASE_URL: "http://localhost:4000",
  homepage: {movies: []},
  reservation: {
    inputValues: {
      cinema: "",
      auditorium: "",
      movie: "",
      screening: "",
      numOfTickets: {
        adult: 0,
        child: 0,
        member: 0,
        sum: 0,
      },
      seat: {},
    },
    requests: {
      cinemas: [],
      auditoriums: [],
      movies: [],
      screenings: [],
      seats: [],
    },
    response: null,
  },
  userInfo: {
    tickets: [],
    reviews: {},
  },
};

export { INITIAL_STATE };
