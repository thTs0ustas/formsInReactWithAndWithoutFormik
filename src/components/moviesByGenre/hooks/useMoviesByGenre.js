import { useEffect } from "react";
import axios from "axios";
import { moviesGenreAction, useProvider } from "../../../model";
import { handleError } from "../../../model/actions";

export const useMoviesByGenre = (genre) => {
  const [state, dispatch] = useProvider(["BASE_URL"]);

  useEffect(() => {
    axios
      .get(`${state.BASE_URL}/movies/genre/${genre}`)
      .then((res) => {
        console.log(res.data);
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
  }, []);
};
