import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentWithStripe } from "../../../../stripe/stripe";
import { dataForPayment } from "../../helpers";

const useContinueButtonHandler = (url, tickets) => {
  const { inputValues } = useSelector((state) => state.reservation);
  const { username, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
