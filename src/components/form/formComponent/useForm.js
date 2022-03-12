import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const INITIAL_STATE = { username: "", password: "" };

export const useForm = () => {
  const [values, setValues] = React.useState(INITIAL_STATE);
  const [response, setResponse] = React.useState({});

  let navigate = useNavigate();

  useEffect(() => {
    response?.username && navigate(`/reservation/${response.username}`);
  }, [response]);

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:4000/users/login", values)
      .then((res) => setResponse(res.data));

    setValues(INITIAL_STATE);
  };

  return { values, response, handleSubmit, handleChange };
};
