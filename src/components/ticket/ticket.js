import React from "react";

import { useTicket } from "./hooks/useTicket";
import { useProvider } from "../../model";

const Ticket = () => {
  const username = window.sessionStorage.getItem("username");
  const [{ tickets, Reservations }] = useProvider([
    "userInfo.tickets",
    "reservation.response.Reservations",
  ]);

  useTicket({ username, reservationId: Reservations.at(-1).id });

  return (
    <div>
      <pre>{JSON.stringify(tickets.at(-1), null, 2)}</pre>
    </div>
  );
};

export { Ticket };
