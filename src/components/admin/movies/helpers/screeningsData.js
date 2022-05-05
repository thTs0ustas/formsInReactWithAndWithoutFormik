import moment from "moment";

export const screeningsData = (data) =>
  data.map((screening) => {
    const movie_starts = moment(screening.movie_starts);
    const movie_ends = moment(screening.movie_ends);
    const movie_date = moment(screening.movie_date);
    return {
      id: screening.id,
      movie_id: screening.MovieOfTheMonth.id,
      title: screening.MovieOfTheMonth.Movie.title,
      auditorium_id: screening.auditorium_id,
      movie_starts: movie_starts.format("HH:mm"),
      movie_ends: movie_ends.format("HH:mm"),
      movie_date: movie_date.format("YYYY-MM-DD"),
    };
  });
