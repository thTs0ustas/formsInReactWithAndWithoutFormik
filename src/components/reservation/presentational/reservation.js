import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import SeatMatrix from "../../seatsGrid/seatsGrid";
import { price, setScreeningString } from "../helpers";
import {
  ReservationInfoBar,
  SeatsContainer,
  ReservationForm,
  TicketOptions,
  Container,
  SeatsGrid,
} from "./styles";
import { Input, SelectContainer, ContinueButton } from "../../../theme";
export const Reservation = ({
  handleSubmit,
  handleChange,
  requests,
  inputValues: { cinema, movie, auditorium, seat, screening },
  state: { reservation },
  handleSeatRemove,
  handleSeatAdd,
}) => {
  return (
    <>
      <ReservationForm onSubmit={handleSubmit}>
        <ReservationInfoBar>
          <SelectContainer controlId="floatingInput" label="Theater">
            <Input name="cinema" onChange={handleChange}>
              <option value=""></option>
              {requests.cinemas.map(({ id, address }) => (
                <option key={id} value={address}>
                  {address}
                </option>
              ))}
            </Input>
          </SelectContainer>

          <SelectContainer controlId="floatingInput" label="Movie">
            <Input name="movie" onChange={(e) => handleChange(e)} disabled={!cinema}>
              <option value=""></option>
              {requests.movies.map(({ id, title }) => (
                <option key={id} value={title}>
                  {title}
                </option>
              ))}
            </Input>
          </SelectContainer>

          <SelectContainer controlId="floatingInput" label="Auditorium">
            <Input name="auditorium" onChange={(e) => handleChange(e)} disabled={!movie}>
              <option value=""></option>
              {requests.auditoriums.map(({ id, hall_num, columns }) => {
                return (
                  <option key={id} value={[id, columns]}>
                    {`Hall ${hall_num}`}
                  </option>
                );
              })}
            </Input>
          </SelectContainer>

          <SelectContainer controlId="floatingInput" label="Screenings">
            <Input name="screening" onChange={(e) => handleChange(e)} disabled={!auditorium}>
              <option value=""></option>
              {requests.screenings.map(({ id, movie_starts, movie_ends, movie_date }) => (
                <option key={id} value={id}>
                  {setScreeningString(movie_starts, movie_ends, movie_date)}
                </option>
              ))}
            </Input>
          </SelectContainer>
        </ReservationInfoBar>
        <Container>
          <TicketOptions />
          <SeatsContainer>
            <SeatsGrid>
              {screening && (
                <SeatMatrix
                  state={reservation}
                  seats={requests.seats}
                  handleSeatRemove={handleSeatRemove}
                  handleSeatAdd={handleSeatAdd}
                />
              )}
            </SeatsGrid>
            <ContinueButton disabled={isEmpty(seat)} type="submit">
              Continue
            </ContinueButton>
          </SeatsContainer>
        </Container>
      </ReservationForm>
      {/* <div className="text-center container-fluid flex-column ">
        <h4 className="text-decoration-underline">Reservation Form</h4>

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
            {requests.cinemas.map(({ id, address }) => (
              <option key={id} value={address}>
                {address}
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
            disabled={!cinema}
          >
            <option value="">Choose...</option>
            {requests.movies.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
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
            disabled={!movie}
          >
            <option value="">Choose...</option>
            {requests.auditoriums.map(({ id, hall_num, columns }) => {
              return (
                <option key={id} value={[id, columns]}>
                  {`Hall ${hall_num}`}
                </option>
              );
            })}
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
            disabled={!auditorium}
            name="screening"
          >
            <option value="">Choose...</option>
            {requests.screenings.map(({ id, movie_starts, movie_ends, movie_date }) => (
              <option key={id} value={id}>
                {setScreeningString(movie_starts, movie_ends, movie_date)}
              </option>
            ))}
          </select>
        </div>
        <div className="w-100">
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="seat">
            Seat:
          </label>
          {screening && (
            <SeatMatrix
              state={reservation}
              seats={requests.seats}
              handleSeatRemove={handleSeatRemove}
              handleSeatAdd={handleSeatAdd}
            />
          )}
        </div>

        <div className="border-bottom">
          <span className="w-25 d-inline-block form-label mt-4">Price:</span>
          <p className="border-0 d-inline-block mx-auto h-25 w-25">{`${price(seat)} €`}</p>
        </div>
        <div>
          <button
            disabled={isEmpty(seat)}
            className="btn btn-primary btn-outline-dark mt-4 me-1"
            type="submit"
          >
            Submit
          </button>
          <button className="btn btn-warning btn-outline-dark mt-4 ms-1" type="reset">
            Reset
          </button>
        </div>
      </div> */}
    </>
  );
};

Reservation.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValues: PropTypes.object,
  price: PropTypes.string,
};
