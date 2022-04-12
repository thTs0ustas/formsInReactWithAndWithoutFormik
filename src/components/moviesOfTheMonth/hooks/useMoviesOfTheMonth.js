import { useEffect } from "react";
import axios from "axios";

export const useMoviesOfTheMonth = ({
  id,
  title,
  genre,
  movies_month_id,
  movie_start,
  movie_ends,
  movie_date,
  auditorium_id,
}) => {
  const [state, dispatch] = useProvider(["BASE_URL"]);

  useEffect(() => {
    axios
      .get(`${state.BASE_URL}/moviesOfTheMonth/homepageLayout`)
      .then(({ data }) => dispatch(moviesToHomeLayout(data)))
  }, []);
};



