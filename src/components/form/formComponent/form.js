import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PropTypes from "prop-types";

export const FormLogin = ({ values, response, handleSubmit, handleChange }) => {
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

FormLogin.propTypes = {
  values: PropTypes.object,
  response: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};
