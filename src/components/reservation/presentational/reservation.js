import React from "react";

import PropTypes from "prop-types";
import SeatMatrix from "../../seatsGrid/seatsGrid";
import { isEmpty } from "lodash";
import { price, setScreeningString } from "../helpers";

export const Reservation = ({
  handleSubmit,
  handleChange,
  requests,
  inputValues,
  state,
  handleSeatRemove,
  handleSeatAdd,
}) => {
  return (
    <div className="text-center container-fluid flex-column m-2">
      <h4 className="text-decoration-underline">Reservation Form</h4>
      <form className="inline-form" onSubmit={handleSubmit}>
        <div>
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="cinema">
            Cinema:
          </label>
          <select
            name="cinema"
            className="form-select d-inline-block mx-auto h-25 w-50"
            id="cinema"
            aria-label=""
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            {requests.cinemas.map((cin) => (
              <option key={cin.id} value={cin.address}>
                {cin.address}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="movie">
            Movie:
          </label>
          <select
            name="movie"
            className="form-select d-inline-block mx-auto h-25 w-50"
            id="movie"
            aria-label=""
            onChange={handleChange}
            disabled={!inputValues.cinema}
          >
            <option value="">Choose...</option>
            {requests.movies.map((movie) => (
              <option key={movie.id} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="auditorium">
            Auditorium:
          </label>
          <select
            name="auditorium"
            className="form-select d-inline-block mx-auto h-25 w-50"
            id="auditorium"
            aria-label=""
            onChange={handleChange}
            disabled={!inputValues.movie}
          >
            <option value="">Choose...</option>
            {requests.auditoriums.map((a) => (
              <option key={a.id} value={a.id}>
                {`Hall ${a["hall_num"]}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="screening">
            Screening:
          </label>
          <select
            className="form-select d-inline-block mx-auto h-25 w-50"
            id="screening"
            aria-label=""
            onChange={handleChange}
            disabled={!inputValues.auditorium}
            name="screening"
          >
            <option value="">Choose...</option>
            {requests.screenings.map((a) => (
              <option key={a.id} value={a.id}>
                {setScreeningString(a["movie_starts"], a["movie_ends"], a["movie_date"])}
              </option>
            ))}
          </select>
        </div>
        <div className="w-100">
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="seat">
            Seat:
          </label>
          {inputValues.screening && (
            <SeatMatrix
              state={state}
              seats={requests.seats}
              handleSeatRemove={handleSeatRemove}
              handleSeatAdd={handleSeatAdd}
            />
          )}
        </div>

        <div className="border-bottom">
          <span className="w-25 d-inline-block form-label mt-4">Price:</span>
          <p className="border-0 d-inline-block mx-auto h-25 w-25">{`${price(
            inputValues.seat
          )} €`}</p>
        </div>
        <div>
          <button
            disabled={!inputValues.seat || isEmpty(inputValues.seat)}
            className="btn btn-primary btn-outline-dark mt-4 me-1"
            type="submit"
          >
            Submit
          </button>
          <button className="btn btn-warning btn-outline-dark mt-4 ms-1" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

Reservation.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValues: PropTypes.object,
  price: PropTypes.string,
};
