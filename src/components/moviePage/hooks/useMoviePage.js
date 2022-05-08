import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import getMovieAction from "../../nowShowingMovies/actions/getMovieAction";
import { clearMovieInfo } from "../../../features";

const useMoviePage = () => {
  const dispatch = useDispatch();
  const { movieInfo = {} } = useSelector((state) => state.nowPlaying);
  const { movie, screenings } = movieInfo;
  const { id } = useParams();

  useEffect(() => {
    if (isEmpty(movieInfo)) {
      dispatch(getMovieAction(id));
    }
    return () => {
      dispatch(clearMovieInfo());
    };
  }, [dispatch]);

  return { movie, screenings, id };
};
export { useMoviePage };
