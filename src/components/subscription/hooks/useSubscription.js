import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import createUserAction from "../actions/createUserAction";

const useSubscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createUserAction());
    navigate("/login");
  }, [dispatch, navigate]);
};
export { useSubscription };
