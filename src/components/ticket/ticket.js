import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:4000";

const Ticket = () => {
  const { username } = useParams();
  const { state } = useLocation();
  const [response, setResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/");
    } else {
      axios
        .get(
          `${BASE_URL}/reservations/users/${username}/ticket/${state.reservationId}`
        )
        .then(({ data }) => setResponse(data));
    }
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export { Ticket };
