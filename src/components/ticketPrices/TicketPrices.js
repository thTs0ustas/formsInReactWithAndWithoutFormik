import React from "react";

import { Link } from "react-router-dom";
import { TableContainer } from "./styledComponents/TableContainer";
import { TableStyles } from "./styledComponents/TableStyles";

const TicketPrices = () => {
  return (
    <TableContainer>
      <h1>Ticket Prices</h1>
      <TableStyles>
        <thead>
          <tr>
            <th scope='col'>Ticket Type</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='td1'>Member</td>
            <td className='td2'>12.00€</td>
          </tr>
          <tr>
            <td className='td1'>Student (Must be a member)</td>
            <td className='td2'>8.00€</td>
          </tr>
          <tr>
            <td className='td1'>Adult</td>
            <td className='td2'>15.00€</td>
          </tr>
          <tr>
            <td className='td1'>Child</td>
            <td className='td2'>11.00€</td>
          </tr>
        </tbody>
      </TableStyles>
      <div>
        <h2>
          Not a member yet? Sign Up<Link to={"/signup"}> Here</Link> and start saving.
        </h2>
      </div>
    </TableContainer>
  );
};

export { TicketPrices };
