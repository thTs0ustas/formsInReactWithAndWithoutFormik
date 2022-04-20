import React from "react";
import { Barcode } from "./barcode/Barcode";
import { Serial } from "./styledComponents/Serial";
import { Table } from "./styledComponents/Table";
import { HolesLower, HolesTop } from "./styledComponents/Holes";
import { TicketContainer } from "./styledComponents/TicketContainer";
import { Numbers } from "./styledComponents/Numbers";
import { BiggerTd } from "./styledComponents/BiggerTd";
import { Cinema, Info, MovieTitle, Title } from "./styledComponents/Misc";
import { selectors, useProvider } from "../../model";
import { useTicket } from "./hooks/useTicket";
import { isEmpty } from "lodash";

const Ticket = () => {
  const [{ tickets, BASE_URL }] = useProvider([
    selectors.tickets,
    selectors.url,
    selectors.inputMovies,
  ]);
  useTicket();
  const recentTicket = tickets?.at(-1);
  console.log(recentTicket);
  return !isEmpty(tickets) ? (
    <>
      {recentTicket.seats.map(({ id, cost, row, number, barcode, numbers }) => (
        <TicketContainer key={id}>
          <HolesTop />
          <Title>
            <Cinema>RETRO CINEMA PRESENTS</Cinema>
            <MovieTitle>{recentTicket.title?.toUpperCase()}</MovieTitle>
          </Title>
          <div className='poster'>
            <img src={`${BASE_URL}${recentTicket?.image}`} alt={`Movie: ${recentTicket?.title}`} />
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
                  <BiggerTd>{recentTicket?.hall}</BiggerTd>
                  <BiggerTd>{row}</BiggerTd>
                  <BiggerTd>{number}</BiggerTd>
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
                  <td>{cost}.00 €</td>
                  <td>{recentTicket?.date.split("-").reverse().join("/")}</td>
                  <td>{recentTicket?.start}</td>
                </tr>
              </tbody>
            </Table>
          </Info>
          <HolesLower />
          <Serial>
            <table>
              <tbody>
                <Barcode barcode={barcode} />
              </tbody>
            </table>
            <Numbers>
              <tbody>
                <tr>
                  <td>{numbers}</td>
                </tr>
              </tbody>
            </Numbers>
          </Serial>
        </TicketContainer>
      ))}
    </>
  ) : null;
};

export { Ticket };
