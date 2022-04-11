import React from "react";
import { Barcode } from "./barcode/Barcode";
import { Serial } from "./styledComponents/Serial";
import { Table } from "./styledComponents/Table";
import { HolesLower, HolesTop } from "./styledComponents/Holes";
import { TicketContainer } from "./styledComponents/TicketContainer";
import { Numbers } from "./styledComponents/Numbers";
import { BiggerTd } from "./styledComponents/BiggerTd";
import { Cinema, Info, MovieTitle, Title } from "./styledComponents/Misc";
import { useProvider } from "../../model";
import { useTicket } from "./hooks/useTicket";
import { isEmpty } from "lodash";

const Ticket = ({ title = "batman" }) => {
  useTicket();
  const [{ tickets }] = useProvider(["userInfo.tickets"]);
  return isEmpty(tickets) ? null : (
    <>
      {tickets.at(-1).seats.map(({ id, row, number, barcode, numbers }) => (
        <TicketContainer key={id}>
          <HolesTop />
          <Title>
            <Cinema>RETRO CINEMA PRESENTS</Cinema>
            <MovieTitle>{title}</MovieTitle>
          </Title>
          <div className='poster'>
            <img src={require(`../../assets/imgs/${title}.jpg`)} alt={`Movie: ${title}`} />
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
                  <BiggerTd>{tickets.at(-1).hall}</BiggerTd>
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
                  <td>{/*{price}*/}0,00 €</td>
                  <td>{tickets.at(-1).date.split("-").reverse().join("/")}</td>
                  <td>{tickets.at(-1).start}</td>
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
  );
};

export { Ticket };
