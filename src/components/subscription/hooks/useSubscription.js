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
// username: values.username,
// password: values.password,
// first_name: values.first_name,
// last_name: values.last_name,
// email: values.email,
// address: values.address,
// postal: values.postal,
// birth_date: values.birth_date,
