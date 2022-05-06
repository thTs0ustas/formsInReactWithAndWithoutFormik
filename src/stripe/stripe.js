import axios from "axios";
import { handleError } from "../model/actions";

export const paymentWithStripe = async (url, data, request, dispatch, token) => {
  try {
    axios
      .post(`${url}/payments/create-checkout`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data: response }) => {
        if (response.url) return response;
        return Promise.reject(response);
      })
      .then((dataWithUrl) => window.location.replace(dataWithUrl.url))
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
  return { message: true };
};
