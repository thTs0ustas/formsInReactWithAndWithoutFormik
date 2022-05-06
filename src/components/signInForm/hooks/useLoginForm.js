import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const useLoginForm = (isInModal = false) => {
  const { id, token } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (id && token) {
      if (isInModal) navigate("/");
    }
  }, [id, token, navigate]);
};
