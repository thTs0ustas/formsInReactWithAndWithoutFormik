const handleData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.MovieOfTheMonth.Movie.title,
    auditorium_id: item.auditorium_id,
    movie_starts: item.movie_starts.split("T")[1].slice(0, 5),
    movie_ends: item.movie_ends.split("T")[1].slice(0, 5),
    movie_date: item.movie_date.split("T")[0],
  }));

export { handleData };
