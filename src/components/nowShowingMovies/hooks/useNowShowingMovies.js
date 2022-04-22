import { useEffect } from "react";
import axios from "axios";
import { useProvider } from "../../../model";
import { moviesToNowShowing } from "../../../model/actions/action";


export const useNowShowingMovies = () => {
  const [state, dispatch] = useProvider(["BASE_URL"]);

  useEffect(() => {
    axios
      .get(`${state.BASE_URL}/moviesOfTheMonth/showingNow`)
      .then(({ data }) => dispatch(moviesToNowShowing(data)))
  }, []);


};