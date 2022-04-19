import moment from "moment";

const handleData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.MovieOfTheMonth?.Movie.title,
    auditorium_id: item.auditorium_id,
    movie_starts: moment(item.movie_starts).format().split("T")[1].slice(0, 5),
    movie_ends: moment(item.movie_ends).format().split("T")[1].slice(0, 5),
    movie_date: moment(item.movie_date).format().split("T")[0],
  }));

export { handleData };
