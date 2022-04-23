import { useEffect } from "react";
import axios from "axios";
import { moviesGenreAction, useProvider } from "../../../model";
import { handleError } from "../../../model/actions";

export const useMoviesByGenre = (genre) => {
  const [{ BASE_URL }, dispatch] = useProvider(["BASE_URL"]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies/genre/${genre}`)
      .then((res) => {
        dispatch(moviesGenreAction(res.data));
      })
      .catch((error) =>
        dispatch(
          handleError({
            message: error.message,
            time: new Date().getTime(),
          })
        )
      );
  }, [BASE_URL, dispatch, genre]);
};
