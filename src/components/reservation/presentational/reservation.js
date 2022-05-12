import React from "react";
import PropTypes from "prop-types";
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

import { disabledDecrement, disabledIncrement, price, PRICING, ticketPropGetter } from "../helpers";

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
import { STUDENT_DAY } from "../constants/STUDENT_DAY";
import { withReservation } from "../Container/withReservation";

function Reservation({
  seat: { seatToTicket, seats: seat },
  isMember,
  image,
  handleChange,
  requests,
  spinner,
  username,
  inputValues: { cinema, movie, auditorium, screening },
  handleContinueButton,
}) {
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
            {isMember && STUDENT_DAY === new Date(screening.split(",")[1]).getDay() && (
              <TicketBar>
                <div>
                  <TypeOfTicket>Student</TypeOfTicket>
                  <Price>{PRICING.student.toFixed(2)} €</Price>
                </div>
                <TicketBarRight>
                  <TicketButton
                    {...ticketPropGetter({
                      type: "student",
                      add: false,
                    })}
                    disabled={
                      !screening ||
                      disabledDecrement({
                        seats: requests.seats[auditorium[0]],
                        reservedSeats: requests.reservedSeats[screening[0]],
                      })
                    }
                  >
                    -
                  </TicketButton>
                  <NumberOfTickets>{seatToTicket.student}</NumberOfTickets>
                  <TicketButton
                    {...ticketPropGetter({
                      type: "student",
                      left: false,
                      subtract: false,
                    })}
                    disabled={
                      !screening ||
                      disabledIncrement(seatToTicket, {
                        seats: requests.seats[auditorium[0]],
                        reservedSeats: requests.reservedSeats[screening[0]],
                      })
                    }
                  >
                    +
                  </TicketButton>
                </TicketBarRight>
              </TicketBar>
            )}

            {!isMember || (
              <TicketBar>
                <div>
                  <TypeOfTicket>Member</TypeOfTicket>
                  <Price>{PRICING.member.toFixed(2)} €</Price>
                </div>
                <TicketBarRight>
                  <TicketButton
                    {...ticketPropGetter({
                      type: "member",
                      add: false,
                    })}
                    disabled={
                      !screening ||
                      disabledDecrement({
                        seats: requests.seats[auditorium[0]],
                        reservedSeats: requests.reservedSeats[screening],
                      })
                    }
                  >
                    -
                  </TicketButton>
                  <NumberOfTickets>{seatToTicket.member}</NumberOfTickets>
                  <TicketButton
                    {...ticketPropGetter({
                      type: "member",
                      left: false,
                      subtract: false,
                    })}
                    disabled={
                      !screening ||
                      disabledIncrement(seatToTicket, {
                        seats: requests.seats[auditorium[0]],
                        reservedSeats: requests.reservedSeats[screening],
                      })
                    }
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
                  {...ticketPropGetter({
                    type: "adult",
                    add: false,
                  })}
                  disabled={
                    !screening ||
                    disabledDecrement({
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
                >
                  -
                </TicketButton>
                <NumberOfTickets>{seatToTicket.adult}</NumberOfTickets>
                <TicketButton
                  {...ticketPropGetter({
                    type: "adult",
                    left: false,
                    subtract: false,
                  })}
                  disabled={
                    !screening ||
                    disabledIncrement(seatToTicket, {
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
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
                  {...ticketPropGetter({
                    type: "child",
                    add: false,
                  })}
                  disabled={
                    !screening ||
                    disabledDecrement({
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
                >
                  -
                </TicketButton>
                <NumberOfTickets>{seatToTicket.child}</NumberOfTickets>
                <TicketButton
                  {...ticketPropGetter({
                    type: "child",
                    left: false,
                    subtract: false,
                  })}
                  disabled={
                    !screening ||
                    disabledIncrement(seatToTicket, {
                      seats: requests.seats[auditorium[0]],
                      reservedSeats: requests.reservedSeats[screening],
                    })
                  }
                >
                  +
                </TicketButton>
              </TicketBarRight>
            </TicketBar>
            <BeAMember link='/signup' />

            <TicketInfo>
              <p>
                You chose <strong>{seatToTicket.sum}</strong> ticket(s)
              </p>

              <p>
                Price: <strong>{price(seatToTicket).toFixed(2)}</strong>€
              </p>
            </TicketInfo>

            <SeatsModal disabled={seatToTicket.sum > 0} sum={seatToTicket?.sum} seat={seat}>
              <SeatsContainer disable={screening && seatToTicket.sum > 0}>
                <SeatsGrid>
                  <SeatMatrix />
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
                  <GuestModal disabled={seatToTicket.sum - keys(seat).length !== 0}>
                    <GuestContainer>
                      <GuestSignup />
                    </GuestContainer>
                  </GuestModal>
                ) : (
                  <ContinueButton
                    disabled={seatToTicket.sum - keys(seat).length !== 0}
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
}
export default withReservation(Reservation);

Reservation.defaultProps = {
  username: null,
  auditorium: [],
  seat: {},
  requests: {},
  spinner: false,
  movie: "",
  cinema: "",
  screening: {},
};

Reservation.propTypes = {
  requests: PropTypes.object,
  username: PropTypes.string,
  screening: PropTypes.object,
  seat: PropTypes.object,
  handleContinueButton: PropTypes.func.isRequired,
  cinema: PropTypes.string,
  movie: PropTypes.string,
  auditorium: PropTypes.array,
  inputValues: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  spinner: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  isMember: PropTypes.bool.isRequired,
};
