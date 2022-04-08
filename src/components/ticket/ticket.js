import React from "react";
import { useProvider } from "../../model";
import { random } from "lodash";
import { Barcode } from "./barcode/Barcode";
import { Serial } from "./styledComponents/Serial";
import { Table } from "./styledComponents/Table";
import { HolesLower, HolesTop } from "./styledComponents/Holes";
import { TicketContainer } from "./styledComponents/TicketContainer";
import { Numbers } from "./styledComponents/Numbers";
import { BiggerTd } from "./styledComponents/BiggerTd";
import { Cinema, Info, MovieTitle, Title } from "./styledComponents/Misc";

const Ticket = () => {
  const username = window.sessionStorage.getItem("username");
  const [{ tickets, Reservations }] = useProvider([
    "userInfo.tickets",
    "reservation.response.Reservations",
  ]);

  // useTicket({ username, reservationId: Reservations.at(-1).id });

  return (
    <TicketContainer>
      <HolesTop />
      <Title>
        <Cinema>CLASSIC CINEMA PRESENTS</Cinema>
        <MovieTitle>BATMAN</MovieTitle>
      </Title>
      <div className='poster'>
        <img
          src={require("../../assets/imgs/batman.jpg")}
          alt='Movie: Only God Forgives'
        />
      </div>
      <Info>
        <Table>
          <tbody>
            <tr>
              <th>SCREEN</th>
              <th>ROW</th>
              <th>SEAT</th>
            </tr>
            <tr>
              <BiggerTd>18</BiggerTd>
              <BiggerTd>H</BiggerTd>
              <BiggerTd>24</BiggerTd>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <th>PRICE</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
            <tr>
              <td>$12.00</td>
              <td>1/13/17</td>
              <td>19:30</td>
            </tr>
          </tbody>
        </Table>
      </Info>
      <HolesLower />
      <Serial>
        <table>
          <tbody>
            <Barcode />
          </tbody>
        </table>
        <Numbers>
          <tbody>
            <tr>
              {Array(21)
                .fill(null)
                .map((item, i) => (
                  <td key={i}>{random(9)}</td>
                ))}
            </tr>
          </tbody>
        </Numbers>
      </Serial>
    </TicketContainer>
  );
};

export { Ticket };
