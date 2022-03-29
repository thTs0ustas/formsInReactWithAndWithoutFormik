import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { useTicket } from "./hooks/useTicket";
import { useProvider } from "../../model";

const Ticket = () => {
  const { username } = useParams();
  const { state } = useLocation();
  const [{ tickets }] = useProvider(["userInfo.tickets"]);

  useTicket(username, state?.reservationId);

  return (
    <div>
      <pre>{JSON.stringify(tickets.at(-1), null, 2)}</pre>
    </div>
  );
};

export { Ticket };
