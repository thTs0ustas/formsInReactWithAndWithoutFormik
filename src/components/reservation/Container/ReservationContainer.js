import { useDispatch, useSelector } from "react-redux";
import { useResContainer } from "./hooks/useResContainer";

import { handleChange } from "../helpers";
import { useContinueButtonHandler } from "./hooks/useContinueButtonHandler";
import { BASE_URL } from "../../../constants";

const ReservationContainer = ({ children }) => {
  const {
    user: { username, isMember },
    requests,
    inputValues,
    seat,
  } = useSelector((state) => ({
    user: state.user,
    requests: state.reservation.requests,
    inputValues: state.reservation.inputValues,
    seat: state.seat,
  }));

  const { seatToTicket } = useSelector((state) => state.seat);
  const { movies } = useSelector((state) => state.reservation.requests);
  const dispatch = useDispatch();

  const { spinner, handleContinueButton } = useContinueButtonHandler(seatToTicket);

  useResContainer(dispatch);

  const data = {
    seat,
    isMember,
    image: `${BASE_URL}${movies?.image}`,
    handleContinueButton,
    handleChange: handleChange(dispatch),
    spinner,
    inputValues,
    requests,
    username,
  };

  return children(data);
};

export { ReservationContainer };
