import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const INITIAL_STATE = { username: "", password: "" };

export const useForm = () => {
  const [values, setValues] = React.useState(INITIAL_STATE);
  const [state, setState] = React.useState({});

  let navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      const username = window.sessionStorage.getItem("username");
      username && navigate(`/users/${username}/reservation`);
    }

    if (state?.accessToken && state?.username) {
      const username = state?.username;
      const accessToken = state?.accessToken;

      window.sessionStorage.setItem("token", accessToken);
      window.sessionStorage.setItem("username", username);

      navigate(`/users/${username}/reservation`);
    }
  }, [state]);
  useEffect(() => {
    state?.username && navigate(`/users/${state.username}/reservation`);
  }, [state]);

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:4000/users/login", values).then((res) => setState(res.data));

    setValues(INITIAL_STATE);
  };

  return { values, state, handleSubmit, handleChange };
};
