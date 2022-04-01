import React, { useState } from "react";
import PropTypes from "prop-types";
import { keys } from "lodash";

import { SeatMatrix } from "../../seatsGrid";
import { TicketButton } from "./ticketButton/ticketButton";
import { disabledDecrement, disabledIncrement, price, setScreeningString } from "../helpers";
import {
  Container,
  NumberOfTickets,
  ReservationForm,
  ReservationInfoBar,
  SeatsContainer,
  SeatsGrid,
  TicketOptions,
  TypeOfTicket,
} from "./styledComponents/styles";
import { ContinueButton, Input, SelectContainer } from "../../../theme";
import { paymentWithStripe } from "../../../stripe/stripe";
import { Spinner } from "react-bootstrap";

export const Reservation = ({
  BASE_URL,
  handleChange,
  requests,
  inputValues: { cinema, movie, auditorium, seat, screening, numOfTickets },
  state: { reservation },
  handleSeatRemove,
  handleSeatAdd,
}) => {
  const [spinner, setSpinner] = useState(true);
  const username = sessionStorage.getItem("username");
  return (
    <ReservationForm>
      <ReservationInfoBar>
        <SelectContainer controlId='floatingInput' label='Movie'>
          <Input name='movie' onChange={(e) => handleChange(e)}>
            <option value='' />
            {requests.movies.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </Input>
        </SelectContainer>

        <SelectContainer controlId='floatingInput' label='Theater'>
          <Input name='cinema' onChange={handleChange} disabled={!movie}>
            <option value='' />
            {requests.cinemas.map(({ id, address }) => (
              <option key={id} value={address}>
                {address}
              </option>
            ))}
          </Input>
        </SelectContainer>

        <SelectContainer controlId='floatingInput' label='Auditorium'>
          <Input name='auditorium' onChange={(e) => handleChange(e)} disabled={!cinema}>
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
        <TicketOptions>
          <div>
            <h3>Type of Ticket</h3>
            <div>
              <TicketButton disabled={disabledDecrement(requests)} type='member' subtract={true}>
                -
              </TicketButton>
              <TypeOfTicket>Member</TypeOfTicket>
              <TicketButton
                disabled={disabledIncrement(numOfTickets, requests)}
                type='member'
                add={true}
              >
                +
              </TicketButton>
              <NumberOfTickets>{numOfTickets.member}</NumberOfTickets>
            </div>
            <div>
              <TicketButton disabled={disabledDecrement(requests)} type='adult' subtract={true}>
                -
              </TicketButton>
              <TypeOfTicket>Adult</TypeOfTicket>
              <TicketButton
                disabled={disabledIncrement(numOfTickets, requests)}
                type='adult'
                add={true}
              >
                +
              </TicketButton>
              <NumberOfTickets>{numOfTickets.adult}</NumberOfTickets>
            </div>
            <div>
              <TicketButton disabled={disabledDecrement(requests)} type='child' subtract={true}>
                -
              </TicketButton>
              <TypeOfTicket>Child</TypeOfTicket>
              <TicketButton
                disabled={disabledIncrement(numOfTickets, requests)}
                type='child'
                add={true}
              >
                +
              </TicketButton>
              <NumberOfTickets>{numOfTickets.child}</NumberOfTickets>
            </div>
          </div>

          <div>
            <p>
              You choose <strong>{numOfTickets.sum}</strong> tickets
            </p>
            <p>
              Remaining seats{" "}
              <strong>
                {numOfTickets.sum - keys(seat).length > -1
                  ? numOfTickets.sum - keys(seat).length
                  : "Deselect some seats"}
              </strong>
            </p>
            <p>Price: {price(numOfTickets).toFixed(2)}€</p>
          </div>
        </TicketOptions>
        <SeatsContainer disable={screening && numOfTickets.sum > 0}>
          <SeatsGrid>
            <SeatMatrix
              state={reservation}
              seats={requests.seats}
              handleSeatRemove={handleSeatRemove}
              handleSeatAdd={handleSeatAdd}
            />
          </SeatsGrid>
          <ContinueButton
            onClick={(ev) => {
              ev.preventDefault();
              setSpinner(!spinner);
              paymentWithStripe(
                BASE_URL,
                {
                  name: "Tickets",
                  price: price(numOfTickets) * 100,
                  quantity: numOfTickets.sum,
                  username,
                },
                { BASE_URL, seat, screening }
              );
            }}
            disabled={numOfTickets.sum - keys(seat).length !== 0}
            type='submit'
          >
            {spinner ? (
              "Continue"
            ) : (
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            )}
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
