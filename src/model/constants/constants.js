const INITIAL_STATE = {
  BASE_URL: "http://localhost:4000",
  reservation: {
    inputValues: {
      cinema: "",
      auditorium: "",
      movie: "",
      screening: "",
      numOfTickets: {
        student: 0,
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
  theme: "true",
  error: { message: "", time: "" },
  admin: {},
};

export { INITIAL_STATE };
