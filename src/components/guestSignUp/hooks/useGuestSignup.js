import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useGuestSignup = (id) => {
  const { error } = useSelector((state) => state.error);
  const navigate = useNavigate();
  useEffect(() => {
    if (error.message) {
      navigate(`/reservation/${id}`);
    }
  }, [error]);
};
