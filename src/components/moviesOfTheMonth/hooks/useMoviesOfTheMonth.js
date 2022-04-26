import { useEffect } from "react";
import axios from "axios";
import { useProvider } from "../../../model";
import { moviesToHomeLayout } from "../../../model/actions/action";

export const useMoviesOfTheMonth = () => {
  const [{ BASE_URL }, dispatch] = useProvider(["BASE_URL"]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/moviesOfTheMonth/homepageLayout`)
      .then(({ data }) => dispatch(moviesToHomeLayout(data)));
  }, []);
};
