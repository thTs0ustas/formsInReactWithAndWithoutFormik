import { useState } from "react";
import { paymentWithStripe } from "../../../../stripe/stripe";
import { dataForPayment } from "../../helpers";
import { useProvider } from "../../../../model";

const useContinueButtonHandler = (url, tickets) => {
  const [{ username, token, inputValues }, dispatch] = useProvider([
    "userInfo.username",
    "userInfo.token",
    "reservation.inputValues",
  ]);
  const [spinner, setSpinner] = useState(true);

  const handleContinueButton = (ev) => {
    ev.preventDefault();
    setSpinner(!spinner);
    if (username)
      paymentWithStripe(
        url,
        {
          data: dataForPayment(tickets),
          username,
        },
        { url, seat: inputValues.seat, screening: inputValues.screening[0] },
        dispatch,
        token
      ).then((r) => r);
  };

  return { spinner, setSpinner, handleContinueButton };
};

export { useContinueButtonHandler };
