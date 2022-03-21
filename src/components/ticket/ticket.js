import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { useTicket } from "./hooks/useTicket";
import { useProvider } from "../../model";

const Ticket = () => {
  const { username } = useParams();
  const { state } = useLocation();

  useTicket(username, state.reservationId);
  const [model] = useProvider(["reservation.ticket", "reservation.response"]);

  return (
    <div>
      <pre>{JSON.stringify(model.ticket, null, 2)}</pre>
    </div>
  );
};

export { Ticket };
