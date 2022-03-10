import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";

const INITIAL_STATE = { username: "", password: "" };

export const FormLogin = () => {
  const [values, setValues] = React.useState(INITIAL_STATE);
  const [response, setResponse] = React.useState(null);

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

  return (
    <div className="container m-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            name="username"
            value={values.username}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
            value={values.password}
          />
        </div>
        <div>
          <button className="btn btn-primary btn-outline-dark" type="submit">
            Submit
          </button>
          <button className="btn btn-warning btn-outline-dark" type="reset">
            Reset
          </button>
        </div>
      </form>
      {response && (
        <div>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
