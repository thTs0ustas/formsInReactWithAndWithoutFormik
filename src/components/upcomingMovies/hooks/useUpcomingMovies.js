import { useEffect } from "react";
import axios from "axios";
import { upcomingMoviesAction, useProvider } from "../../../model";
import { isEmpty } from "lodash";

export const useUpcomingMovies = () => {
  const [state, dispatch] = useProvider(["BASE_URL", "upcoming"]);

  useEffect(() => {
    if (isEmpty(state.upcoming)) {
      axios
        .get(`${state.BASE_URL}/moviesOfTheMonth/upcoming`)
        .then(({ data }) => dispatch(upcomingMoviesAction(data)));
    }
  }, []);
};
