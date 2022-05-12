import React, { useRef } from "react";
import { isEmpty } from "lodash";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { Barcode } from "./barcode/Barcode";
import { Serial } from "./styledComponents/Serial";
import { Table } from "./styledComponents/Table";
import { HolesLower, HolesTop } from "./styledComponents/Holes";
import { TicketContainer } from "./styledComponents/TicketContainer";
import { Numbers } from "./styledComponents/Numbers";
import { BiggerTd } from "./styledComponents/BiggerTd";
import { Cinema, Info, MovieTitle, Title } from "./styledComponents/Misc";
import { useTicket } from "./hooks/useTicket";
import { ContinueButton } from "../../theme";
import { BASE_URL } from "../../constants";

const pageStyle = `
  @page {
    size: 50mm 115mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

 
`;
function Ticket() {
  const { tickets } = useSelector((state) => state.user);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle,
  });

  useTicket();

  const recentTicket = tickets?.at(-1);

  return !isEmpty(tickets) ? (
    <>
      {recentTicket.seats.map(({ id, cost, row, number, barcode, numbers }) => (
        <div key={id} style={{ display: "flex", flexDirection: "column" }}>
          <ContinueButton className='ticket' onClick={handlePrint}>
            Print to pdf
          </ContinueButton>
          <TicketContainer ref={componentRef} key={id}>
            <HolesTop />
            <Title>
              <Cinema>RETRO CINEMA PRESENTS</Cinema>
              <MovieTitle>{recentTicket.title?.toUpperCase()}</MovieTitle>
            </Title>
            <div className='poster'>
              <img
                src={`${BASE_URL}${recentTicket?.image}`}
                alt={`Movie: ${recentTicket?.title}`}
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
                <tbody style={{ display: "flex", flexDirection: "column" }}>
                  <Barcode barcode={barcode} />
                  <Numbers>
                    <tr>
                      <td>{numbers}</td>
                    </tr>
                  </Numbers>
                </tbody>
              </table>
            </Serial>
          </TicketContainer>
        </div>
      ))}
    </>
  ) : null;
}

export { Ticket };
