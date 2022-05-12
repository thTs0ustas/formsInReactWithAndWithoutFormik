import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userAdminSelector } from "../selectors/selectors";
import getNotShowingMoviesAction from "../actions/getNotShowingMoviesAction";
import addNewMovieOfTheMonthAction from "../actions/addNewMovieOfTheMonthAction";

const useAddNewMOTM = (show, onHide) => {
  const { id, token, notPlayingMovies } = useSelector((state) => userAdminSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) dispatch(getNotShowingMoviesAction({ id, token }));
  }, [show]);

  const formik = useFormik({
    initialValues: {
      movie_id: 0,
    },
    onSubmit: (values) => {
      dispatch(addNewMovieOfTheMonthAction({ id, token, movie_id: values.movie_id }));
      onHide();
      formik.resetForm();
    },
    validationSchema: Yup.object({
      movie_id: Yup.number().required("Title required"),
    }),
  });
  return { formik, notPlayingMovies };
};

export { useAddNewMOTM };
