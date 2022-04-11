import React from "react";
import SocialIcons from "./SocialIcon";
import { Column, MenuContainer, Title } from "./styles/Footer.styled";

export default function Menu() {
  return (
    <MenuContainer>
      <Column>
        <Title>Films</Title>
        <ul>
          <li>
            <a href='#'>Now Showing</a>
          </li>
          <li>
            <a href='#'>Coming soon</a>
          </li>
          <li>
            <a href='#'>Cameo at home</a>
          </li>
        </ul>
      </Column>
      <Column>
        <Title>Cinema info</Title>
        <ul>
          <li>
            <a href='#'>History</a>
          </li>
          <li>
            <a href='#'>Food & Drink</a>
          </li>
          <li>
            <a href='#'>Accessibility</a>
          </li>
          <li>
            <a href='#'>Cinema Hire</a>
          </li>
          <li>
            <a href='#'>Ticket Prices</a>
          </li>
          <li>
            <a href='#'>Explore Belgrave</a>
          </li>
          <li>
            <a href='#'>Moving Story Entertainment</a>
          </li>
        </ul>
      </Column>
      <Column>
        <Title>Contact us</Title>
        <ul>
          <li>
            <a href='#'>(03) 9754 7844</a>
          </li>
          <li>
            <a href='#'>Email Us</a>
          </li>
        </ul>
        <SocialIcons />
      </Column>
    </MenuContainer>
  );
}
