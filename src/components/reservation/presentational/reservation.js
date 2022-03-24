import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { SeatMatrix } from "../../seatsGrid";
import { setScreeningString } from "../helpers";
import {
  Container,
  ReservationForm,
  ReservationInfoBar,
  SeatsContainer,
  SeatsGrid,
  TicketOptions,
} from "./styles";
import { ContinueButton, Input, SelectContainer } from "../../../theme";

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
    <ReservationForm onSubmit={handleSubmit}>
      <ReservationInfoBar>
        <SelectContainer controlId='floatingInput' label='Theater'>
          <Input name='cinema' onChange={handleChange}>
            <option value='' />
            {requests.cinemas.map(({ id, address }) => (
              <option key={id} value={address}>
                {address}
              </option>
            ))}
          </Input>
        </SelectContainer>

        <SelectContainer controlId='floatingInput' label='Movie'>
          <Input name='movie' onChange={(e) => handleChange(e)} disabled={!cinema}>
            <option value='' />
            {requests.movies.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </Input>
        </SelectContainer>

        <SelectContainer controlId='floatingInput' label='Auditorium'>
          <Input name='auditorium' onChange={(e) => handleChange(e)} disabled={!movie}>
            <option value='' />
            {requests.auditoriums.map(({ id, hall_num, columns }) => {
              return (
                <option key={id} value={[id, columns]}>
                  {`Hall ${hall_num}`}
                </option>
              );
            })}
          </Input>
        </SelectContainer>

        <SelectContainer controlId='floatingInput' label='Screenings'>
          <Input name='screening' onChange={(e) => handleChange(e)} disabled={!auditorium}>
            <option value='' />
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
          <ContinueButton disabled={isEmpty(seat)} type='submit'>
            Continue
          </ContinueButton>
        </SeatsContainer>
      </Container>
    </ReservationForm>
  );
};

Reservation.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValues: PropTypes.object,
  price: PropTypes.string,
};
