import React from "react";
import {
  TextContainer,
  MainTitle,
  SectionTitle,
  Paragraph,
  DaysDiv,
  DaysButton,
  SessionDiv,
  SessionButton,
} from "./styledComponents/MainTextStyles";

const MainText = () => {
  return (
    <TextContainer>
      <MainTitle>Book Tickets</MainTitle>
      <SectionTitle>Select Day</SectionTitle>
      <DaysDiv>
        <DaysButton href=''>Monday</DaysButton>
        <DaysButton href=''>Tuesday</DaysButton>
        <DaysButton href=''>Wednesday</DaysButton>
        <DaysButton href=''>Thursday</DaysButton>
        <DaysButton href=''>Friday</DaysButton>
        <DaysButton href=''>Saturday</DaysButton>
        <DaysButton href=''>Sunday</DaysButton>
      </DaysDiv>
      <SectionTitle>Book a session</SectionTitle>
      <SessionDiv>
        <SessionButton href=''>17:00</SessionButton>
        <SessionButton href=''>20:00</SessionButton>
        <SessionButton href=''>23:00</SessionButton>
      </SessionDiv>
      <SectionTitle>The Story</SectionTitle>
      <Paragraph>
        A criminal pleads insanity and is admitted to a mental institution,
        where he rebels against the oppressive nurse and rallies up the scared
        patients.
      </Paragraph>
      <SectionTitle>Duration</SectionTitle>
      <Paragraph>133</Paragraph>
      <SectionTitle>Genre</SectionTitle>
      <Paragraph>Drama</Paragraph>
      <SectionTitle>Release Year</SectionTitle>
      <Paragraph>1975</Paragraph>
    </TextContainer>
  );
};

export default MainText;
