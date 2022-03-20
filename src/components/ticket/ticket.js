import React from "react";
import { useTicket } from "./hooks/useTicket";
import { useProvider } from "../../model";
import { useLocation, useParams } from "react-router-dom";

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
