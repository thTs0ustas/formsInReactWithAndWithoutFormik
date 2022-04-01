import axios from "axios";

export const paymentWithStripe = (url, data, request) => {
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
    .then((data) => window.location.replace(data.url))
    .catch((err) => {
      console.log(err);
      window.sessionStorage.removeItem("request");
      return Promise.reject(err);
    });
};
