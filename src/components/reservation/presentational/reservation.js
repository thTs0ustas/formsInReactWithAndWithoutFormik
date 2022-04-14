import React from "react";

import { keys } from "lodash";
import { MdEventSeat } from "react-icons/md";
import { Spinner } from "react-bootstrap";

import { SeatMatrix } from "../../seatsGrid";
import { GuestSignup } from "../../guestSignUp";
import {
  BeAMember,
  GuestModal,
  MoviePoster,
  SeatsModal,
  SelectInputs,
  TicketButton,
} from "./innerComponents";

import { disabledDecrement, disabledIncrement, price, PRICING } from "../helpers";

import {
  Container,
  GuestContainer,
  NumberOfTickets,
  Price,
  ReservationForm,
  SeatLegend,
  SeatsContainer,
  SeatsGrid,
  TicketBar,
  TicketBarRight,
  TicketInfo,
  TicketOptions,
  TypeOfTicket,
} from "./styledComponents";

import { ContinueButton } from "../../../theme";

export const Reservation = ({
  image,
  handleChange,
  requests,
  spinner,
  username,
  inputValues: { cinema, movie, auditorium, seat, screening, numOfTickets },
  state: { reservation },
  handleSeatRemove,
  handleSeatAdd,
  handleContinueButton,
}) => {
  console.log(movie);
  return (
    <>
      <MoviePoster image={image} />
      <ReservationForm>
        <SelectInputs
          handleChange={handleChange}
          auditorium={auditorium}
          screening={screening}
          requests={requests}
          cinema={cinema}
          movie={movie}
        />
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
                    disabled={!screening || disabledDecrement(requests)}
                    type='member'
                    subtract={true}
                  >
                    -
                  </TicketButton>
                  <NumberOfTickets>{numOfTickets.member}</NumberOfTickets>
                  <TicketButton
                    disabled={
                      !screening ||
                      disabledIncrement(numOfTickets, {
                        seats: requests.seats[auditorium[0]],
                        reservedSeats: requests.reservedSeats[screening],
                      })
                    }
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
                  disabled={
                    !screening ||
                    disabledIncrement(numOfTickets, {
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
                  type='adult'
                  subtract={true}
                >
                  -
                </TicketButton>
                <NumberOfTickets>{numOfTickets.adult}</NumberOfTickets>
                <TicketButton
                  disabled={
                    !screening ||
                    disabledIncrement(numOfTickets, {
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
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
                  disabled={
                    !screening ||
                    disabledIncrement(numOfTickets, {
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
                  type='child'
                  subtract={true}
                >
                  -
                </TicketButton>
                <NumberOfTickets>{numOfTickets.child}</NumberOfTickets>
                <TicketButton
                  disabled={
                    !screening ||
                    disabledIncrement(numOfTickets, {
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
                  type='child'
                  add={true}
                >
                  +
                </TicketButton>
              </TicketBarRight>
            </TicketBar>
            <BeAMember onClick={() => (fn) => fn("/login")} />

            <TicketInfo>
              <p>
                You choose <strong>{numOfTickets.sum}</strong> ticket(s)
              </p>

              <p>
                Price: <strong>{price(numOfTickets).toFixed(2)}</strong>€
              </p>
            </TicketInfo>

            <SeatsModal disabled={numOfTickets.sum > 0} sum={numOfTickets?.sum} seat={seat}>
              <SeatsContainer disable={screening && numOfTickets.sum > 0}>
                <SeatsGrid>
                  <SeatMatrix
                    state={reservation}
                    seats={requests.seats[auditorium[0]]}
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
                  <GuestModal disabled={numOfTickets.sum - keys(seat).length !== 0}>
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
    </>
  );
};
