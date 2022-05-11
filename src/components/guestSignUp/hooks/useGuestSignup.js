import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useGuestSignup = (id) => {
  const { message } = useSelector((state) => state.error);
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      navigate(`/reservation/${id}`);
    }
  }, [message, navigate, id]);
};
