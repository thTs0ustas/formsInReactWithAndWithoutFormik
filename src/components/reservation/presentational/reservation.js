import React from "react";
import PropTypes from "prop-types";
import { keys } from "lodash";

import { SeatMatrix } from "../../seatsGrid";
import { TicketButton } from "./ticketButton/ticketButton";
import {
  disabledDecrement,
  disabledIncrement,
  price,
  PRICING,
  setScreeningString,
} from "../helpers";
import {
  ButtonForMembers,
  Container,
  GuestContainer,
  NumberOfTickets,
  PleaseBeAMember,
  PleaseBeAMemberHeader,
  PleaseBeAMemberParagraph,
  Price,
  ReservationForm,
  ReservationInfoBar,
  SeatLegend,
  SeatsContainer,
  SeatsGrid,
  TicketBar,
  TicketBarRight,
  TicketInfo,
  TicketOptions,
  TypeOfTicket,
} from "./styledComponents";
import { ContinueButton, Input, SelectContainer } from "../../../theme";
import { paymentWithStripe } from "../../../stripe/stripe";
import { Spinner } from "react-bootstrap";
import { SeatsModal } from "./modal/Modal";
import { GuestModal } from "./guestModal/GuestModal";

import { GuestSignup } from "../../guestSignUp";
import { MdEventSeat } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Reservation = ({
  BASE_URL,
  handleChange,
  requests,
  spinner,
  setSpinner,
  inputValues: { cinema, movie, auditorium, seat, screening, numOfTickets },
  state: { reservation },
  handleSeatRemove,
  handleSeatAdd,
}) => {
  const username = window.sessionStorage.getItem("username");
  const navigate = useNavigate();
  const handleContinueButton = (ev) => {
    ev.preventDefault();
    setSpinner(!spinner);
    if (username)
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
  };

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
          <Input
            name='auditorium'
            onChange={(e) => handleChange(e)}
            disabled={!cinema}
          >
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
          <Input
            name='screening'
            onChange={(e) => handleChange(e)}
            disabled={!auditorium}
          >
            <option value='' />
            {requests.screenings.map(
              ({ id, movie_starts, movie_ends, movie_date }) => (
                <option key={id} value={id}>
                  {setScreeningString(movie_starts, movie_ends, movie_date)}
                </option>
              )
            )}
          </Input>
        </SelectContainer>
      </ReservationInfoBar>
      <Container>
        <TicketOptions>
          {!username || (
            <TicketBar>
              <div>
                <TypeOfTicket>Member</TypeOfTicket>
                <Price>{PRICING.member.toFixed(2)} €</Price>
              </div>
              <TicketBarRight>
                <TicketButton
                  left={true}
                  disabled={disabledDecrement(requests)}
                  type='member'
                  subtract={true}
                >
                  -
                </TicketButton>
                <NumberOfTickets>{numOfTickets.member}</NumberOfTickets>
                <TicketButton
                  disabled={disabledIncrement(numOfTickets, requests)}
                  type='member'
                  add={true}
                >
                  +
                </TicketButton>
              </TicketBarRight>
            </TicketBar>
          )}
          <TicketBar>
            <div>
              <TypeOfTicket>Adult</TypeOfTicket>
              <Price>{PRICING.adult.toFixed(2)} €</Price>
            </div>
            <TicketBarRight>
              <TicketButton
                left={true}
                disabled={disabledDecrement(requests)}
                type='adult'
                subtract={true}
              >
                -
              </TicketButton>
              <NumberOfTickets>{numOfTickets.adult}</NumberOfTickets>
              <TicketButton
                disabled={disabledIncrement(numOfTickets, requests)}
                type='adult'
                add={true}
              >
                +
              </TicketButton>
            </TicketBarRight>
          </TicketBar>
          <TicketBar>
            <div>
              <TypeOfTicket>Child</TypeOfTicket>
              <Price>{PRICING.child.toFixed(2)} €</Price>
            </div>
            <TicketBarRight>
              <TicketButton
                left={true}
                disabled={disabledDecrement(requests)}
                type='child'
                subtract={true}
              >
                -
              </TicketButton>
              <NumberOfTickets>{numOfTickets.child}</NumberOfTickets>
              <TicketButton
                disabled={disabledIncrement(numOfTickets, requests)}
                type='child'
                add={true}
              >
                +
              </TicketButton>
            </TicketBarRight>
          </TicketBar>

          <PleaseBeAMember>
            <div>
              <PleaseBeAMemberHeader>
                Please be a member to buy tickets
              </PleaseBeAMemberHeader>
              <PleaseBeAMemberParagraph>
                TERMS AND CONDITIONS APPLY{" "}
              </PleaseBeAMemberParagraph>
            </div>
            <ButtonForMembers onClick={() => navigate("/login")}>
              BE A MEMBER
            </ButtonForMembers>
          </PleaseBeAMember>

          <TicketInfo>
            <p>
              You choose <strong>{numOfTickets.sum}</strong> ticket(s)
            </p>

            <p>
              Price: <strong>{price(numOfTickets).toFixed(2)}</strong>€
            </p>
          </TicketInfo>

          <SeatsModal
            disabled={numOfTickets.sum > 0}
            sum={numOfTickets?.sum}
            seat={seat}
          >
            <SeatsContainer disable={screening && numOfTickets.sum > 0}>
              <SeatsGrid>
                <SeatMatrix
                  state={reservation}
                  seats={requests.seats}
                  handleSeatRemove={handleSeatRemove}
                  handleSeatAdd={handleSeatAdd}
                />
              </SeatsGrid>
              <SeatLegend>
                <div>
                  <MdEventSeat size={25} color='black' />
                  <span>Seat is already taken.</span>
                </div>
                <div>
                  <MdEventSeat size={25} color='#FF9D69' />
                  <span>Seat is open.</span>
                </div>
                <div>
                  <MdEventSeat size={25} color='crimson' />
                  <span>Seat is checked.</span>
                </div>
              </SeatLegend>
              {!username ? (
                <GuestModal
                  disabled={numOfTickets.sum - keys(seat).length !== 0}
                >
                  <GuestContainer>
                    <GuestSignup />
                  </GuestContainer>
                </GuestModal>
              ) : (
                <ContinueButton
                  disabled={numOfTickets.sum - keys(seat).length !== 0}
                  onClick={handleContinueButton}
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
              )}
            </SeatsContainer>
          </SeatsModal>
        </TicketOptions>
      </Container>
    </ReservationForm>
  );
};

Reservation.propTypes = {
  requests: PropTypes.object,
  handleSeatAdd: PropTypes.func,
  handleSeatRemove: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValues: PropTypes.object,
  price: PropTypes.string,
  screening: PropTypes.object,
  setSeat: PropTypes.func,
  setSpinner: PropTypes.func,
  setTicket: PropTypes.func,
};
