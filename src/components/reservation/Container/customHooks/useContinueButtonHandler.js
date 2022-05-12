import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataForPayment } from "../../helpers";
import { paymentAction } from "../../actions/paymentAction";

const useContinueButtonHandler = (tickets) => {
  const { screening } = useSelector((state) => state.reservation.inputValues);
  const { seats } = useSelector((state) => state.seat);
  const { id, token } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);

  const handleContinueButton = (ev) => {
    ev.preventDefault();
    setSpinner(!spinner);
    const payload = {
      data: dataForPayment(tickets),
      seat: seats,
      screening: screening.split(",")[0],
      token,
      id,
    };

    if (id) dispatch(paymentAction(payload));
  };

  return { spinner, setSpinner, handleContinueButton };
};

export { useContinueButtonHandler };
