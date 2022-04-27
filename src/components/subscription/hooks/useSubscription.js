import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import createUserAction from "../actions/createUserAction";
import { useDispatch } from "react-redux";

const useSubscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createUserAction());
    navigate("/login");
  }, [dispatch, navigate]);
};
export { useSubscription };
