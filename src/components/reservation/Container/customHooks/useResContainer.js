import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { getMovieForResAction } from "../../actions/getMovieForResAction";

export const useResContainer = (dispatch) => {
  const { id } = useParams();

  useEffect(() => {
    // dispatch(resetReservation());
    dispatch(getMovieForResAction(id));
  }, [id, dispatch]);
};
