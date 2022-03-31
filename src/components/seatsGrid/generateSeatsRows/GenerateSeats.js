import { Seat } from "../seat/Seat";
import { SeatDiv } from "../styledComp";

const GenerateSeats = (seatNumbers, handleSeatRemove, handleSeatAdd) => {
  return (
    <SeatDiv>
      {seatNumbers.map((seatNumber) => (
        <Seat
          key={seatNumber.id}
          seatInfo={seatNumber}
          handleSeatRemove={handleSeatRemove}
          handleSeatAdd={handleSeatAdd}
        />
      ))}
    </SeatDiv>
  );
};

export { GenerateSeats };
