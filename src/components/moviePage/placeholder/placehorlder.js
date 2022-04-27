import { Placeholder } from "react-bootstrap";
import {
  DaysButton,
  DaysDiv,
  MainTitle,
  Paragraph,
  SectionTitle,
  SessionButton,
  SessionDiv,
  TextContainer,
} from "../styledComponents/MainTextStyles";
import React from "react";

const PlaceholderComp = () => (
  <TextContainer>
    <MainTitle> Book Tickets</MainTitle>
    <SectionTitle>Select Day</SectionTitle>
    <DaysDiv>
      <Placeholder as={DaysButton} xs={2} bg='warning' size={"lg"}>
        <Placeholder animation='glow' />
      </Placeholder>

      <Placeholder as={DaysButton} xs={2} bg='warning' size={"lg"}>
        <Placeholder animation='glow' />
      </Placeholder>
    </DaysDiv>
    <SectionTitle>Book a session</SectionTitle>
    <SessionDiv>
      <SessionButton>
        <Placeholder
          animation='glow'
          style={{
            marginTop: 10,
            marginRight: 10,
            marginBottom: 50,
            border: "2px solid transparent",
            backgroundColor: "#b09661",
            color: "#000",
          }}
        />
      </SessionButton>
      <SessionButton>
        <Placeholder
          animation='wave'
          style={{
            marginTop: 10,
            marginRight: 10,
            marginBottom: 50,
            border: "2px solid transparent",
            backgroundColor: "#b09661",
            color: "#000",
          }}
        />
      </SessionButton>
    </SessionDiv>

    <SectionTitle>The Story</SectionTitle>
    <Paragraph>
      <Placeholder xs={4} />
      <Placeholder xs={4} />
      <Placeholder xs={4} />
      <Placeholder xs={4} />
      <Placeholder xs={4} />
    </Paragraph>
    <SectionTitle>Duration</SectionTitle>
    <Paragraph>
      <Placeholder xs={1} />
    </Paragraph>
    <SectionTitle>Genre</SectionTitle>
    <Paragraph>
      <Placeholder xs={1} />
    </Paragraph>
    <SectionTitle>Release Year</SectionTitle>
    <Placeholder as={Paragraph} xs={1}>
      <Placeholder animation='glow' />
    </Placeholder>
  </TextContainer>
);

export { PlaceholderComp };
