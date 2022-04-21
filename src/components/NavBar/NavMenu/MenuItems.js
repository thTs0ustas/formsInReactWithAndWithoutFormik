import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import styled from "styled-components";

const MenuIcon = styled(BiMoviePlay)`
  color: red;
  font-size: calc(16px + 0.2rem);
  margin-right: 5px;
`;

export const MenuItems = [
  {
    title: "NOW PLAYING",
    url: "nowPlaying",
    icon: <MenuIcon />,
  },
  {
    title: "UPCOMING",
    url: "#",
  },
  {
    title: "CINEMAS",
    url: "#",
  },
  {
    title: "CONTACT US",
    url: "#",
  },
];
