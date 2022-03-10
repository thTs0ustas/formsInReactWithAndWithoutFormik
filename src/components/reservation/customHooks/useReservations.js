import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useReservations = (userId) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem("token")) {
      navigate("/");
    }
    console.log(1);
    axios
      .get("http://localhost:4000/movies", {
        params: {
          id: userId,
        },
        headers: {
          authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      })
      .then(({ data }) => setMovies(data));
  }, [userId]);

  return { movies };
};
