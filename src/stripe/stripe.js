import axios from "axios";

export const paymentWithStripe = (url, data, request) => {
  window.sessionStorage.setItem("request", JSON.stringify(request));
  axios
    .post(`${url}/payments/create-checkout`, data)
    .then(({ data }) => {
      if (data.url) return data;
      return Promise.reject(data);
    })
    .then((data) => (window.location = data.url))
    .catch((error) => new Error(error));
};
