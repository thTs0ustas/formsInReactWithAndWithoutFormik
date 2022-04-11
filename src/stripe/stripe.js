import axios from "axios";
import { handleError } from "../model/actions";

export const paymentWithStripe = (url, data, request, dispatch) => {
  window.sessionStorage.setItem("request", JSON.stringify(request));
  axios
    .post(`${url}/payments/create-checkout`, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
    .then(({ data }) => {
      if (data.url) return data;
      return Promise.reject(data);
    })
    .then((data) => window.location.replace(data["url"]))
    .catch((error) => {
      window.sessionStorage.removeItem("request");
      dispatch(
        handleError({
          message: error.message,
          time: new Date().getTime(),
        })
      );
    });
};
