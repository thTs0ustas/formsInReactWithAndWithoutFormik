import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcon";
import { Column, MenuContainer, Title } from "./styles/Footer.styled";

export default function Menu() {
  return (
    <MenuContainer id='container'>
      <Column>
        <Title>Films</Title>
        <ul>
          <li>
            <Link to='/nowPlaying'>Now Showing</Link>
          </li>
          <li>
            <Link to='/upcoming'>Coming soon</Link>
          </li>
          <li>
            <Link to='/ticketPrices'>Ticket Prices</Link>
          </li>
          <li>
            <Link to='/aboutUs'>History</Link>
          </li>
        </ul>
      </Column>

      <Column>
        <Title>Contact us</Title>
        <ul>
          <li>
            <a href='#container'>(+18) 6969 696969</a>
          </li>
          <li>
            <a href='mailto:retrocinemas@hotmail.com'>Email Us</a>
          </li>
        </ul>
        <SocialIcons />
      </Column>
    </MenuContainer>
  );
}
