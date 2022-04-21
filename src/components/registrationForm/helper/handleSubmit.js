import axios from "axios";
import { handleError } from "../../../model/actions";

const handleSubmit = (values, state, dispatch, setSubmitting, resetForm) => {
  axios
    .post(`${state.BASE_URL}/users/create/check`, {
      values,
    })
    .then(({ data }) => {
      if (data.message) {
        dispatch(
          handleError({
            message: data.message,
            time: new Date().getTime(),
          })
        );
        setSubmitting(false);
        resetForm();
      } else {
        setSubmitting(false);
        resetForm();
        if (data.url) return window.location.replace(data["url"]);
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      setSubmitting(false);
      resetForm();
      dispatch(
        handleError({
          message: error.message,
          time: new Date().getTime(),
        })
      );
    });
};
export { handleSubmit };
