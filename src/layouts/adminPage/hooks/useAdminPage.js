import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import { clearAdmin, setError } from "../../../features";

const useAdminPage = () => {
  const dispatch = useDispatch();
  const { id, token, isAdmin } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [key, setKey] = useState("home");

  useEffect(() => {
    if (!id && !token && !isAdmin) {
      const time = moment().format("HH:mm:ss");
      dispatch(setError({ message: `You are not logged in as admin.`, time }));
      navigate("/");
    }
    return () => {
      dispatch(clearAdmin());
    };
  }, [dispatch, navigate, isAdmin, token, id]);

  return { key, setKey };
};

export { useAdminPage };
