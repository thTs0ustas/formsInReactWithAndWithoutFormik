import axios from "axios";
import { handleError } from "../model/actions";

export const paymentWithStripe = (url, data, request, dispatch, token) => {
  try {
    axios
      .post(`${url}/payments/create-checkout`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        if (data.url) return data;
        return Promise.reject(data);
      })
      .then((data) => window.location.replace(data["url"]))
      .catch((error) => {
        dispatch(
          handleError({
            message: error.message,
            time: new Date().getTime(),
          })
        );
      });
  } catch (error) {
    dispatch(
      handleError({
        message: error,
        time: new Date().getTime(),
      })
    );
  }
};
