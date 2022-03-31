import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, UserDetails, InputBox, Button } from "./styledComponents";

const INITIAL_STATE = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  postal: "",
  birth_date: "",
};

export const RegistrationForm = () => {
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
    console.log(response);
    axios.post("http://localhost:4000/users/create", values).then((res) => setResponse(res.data));

    setValues(INITIAL_STATE);
  };

  return (
    <>
      <Container>
        <h1>Registration</h1>
        <h3>Your Account Details</h3>

        <form action="#" onSubmit={handleSubmit}>
          <UserDetails>
            <InputBox>
              <span className="details">Username*</span>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your usename"
                value={values.username}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">Password*</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">First Name*</span>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                value={values.first_name}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">Last Name*</span>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your last name"
                value={values.last_name}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">Address*</span>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={values.address}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">Email*</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">Postal*</span>
              <input
                type="text"
                id="postal"
                name="postal"
                placeholder="Enter your postal code"
                value={values.postal}
                onChange={handleChange}
                required
              />
            </InputBox>
            <InputBox>
              <span className="details">Birthdate*</span>
              <input
                type="text"
                id="birth_date"
                name="birth_date"
                placeholder="Enter your birthdate"
                value={values.birth_date}
                onChange={handleChange}
                required
              />
            </InputBox>
          </UserDetails>
          <Button type="submit">Register</Button>
        </form>
      </Container>
    </>
  );
};
