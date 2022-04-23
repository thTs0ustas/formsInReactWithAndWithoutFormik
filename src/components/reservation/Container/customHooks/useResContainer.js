import { useEffect } from "react";
import axios from "axios";

import { inputChangeAction, requestAction, resetReservation } from "../../../../model";
import { handleError } from "../../../../model/actions";
import { useParams } from "react-router-dom";
import { get } from "lodash";

export const useResContainer = ({ BASE_URL, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(resetReservation());
    axios
      .get(`${BASE_URL}/moviesOfTheMonth/reservation/${id}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(requestAction(data));
        const { title } = get(data, "movie.Movie");
        dispatch(
          inputChangeAction({
            name: "movie",
            value: title,
          })
        );
      })
      .catch((error) =>
        dispatch(handleError({ message: error.message, time: new Date().getTime() }))
      );
  }, [BASE_URL, id, dispatch]);
};
