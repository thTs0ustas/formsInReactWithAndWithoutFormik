import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { InputSignup } from "../../theme";



const INITIAL_STATE = { username: "", password: "", first_name: "", last_name: "", email: "", address: "", postal: "", birth_date: "" };

export const RegistrationForm = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:4000/users/create", values)
      .then((res) => setResponse(res.data));

    setValues(INITIAL_STATE);
  };

  return (
    <div className="container m-2">
      <h4 className="mb-4 text-decoration-underline">Registration Form</h4>
      <form className="d-grid gap-2"onSubmit={handleSubmit}>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="username">
            Username:
          </label>
          <InputSignup
            
            onChange={handleChange}
            id="username"
            type="text"
            name="username"
            value={values.username}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
            value={values.password}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="first_name">
            First Name:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="first_name"
            type="text"
            name="first_name"
            value={values.first_name}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="last_name">
            Last Name:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="last_name"
            type="text"
            name="last_name"
            value={values.last_name}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="address">
            Address:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="address"
            type="text"
            name="address"
            value={values.address}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="email"
            type="email"
            name="email"
            value={values.email}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="postal">
            Postal:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="postal"
            type="text"
            name="postal"
            value={values.postal}
          />
        </div>
        <div>
          <label className="w-25 d-inline-block form-label" htmlFor="birth_date">
            Birthdate:
          </label>
          <input
            className="w-25 p-1 d-inline-block"
            onChange={handleChange}
            id="birth_date"
            type="text"
            name="birth_date"
            value={values.birth_date}
          />
        </div>
        <div>
          <button className="btn btn-primary btn-outline-dark mt-4 me-1" type="submit">
            Submit
          </button>
          <button className="btn btn-warning btn-outline-dark mt-4 ms-1" type="reset">
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