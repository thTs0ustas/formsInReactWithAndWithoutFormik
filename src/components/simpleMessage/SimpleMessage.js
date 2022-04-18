import { Container } from "./styledComponents/Container";
import { Link } from "react-router-dom";
import { LinkToHome } from "./styledComponents/LinkToHome";

const SimpleMessage = ({ message }) => (
  <Container>
    <h2>{message}</h2>
    <LinkToHome>
      <Link to='/'>Homepage</Link>
    </LinkToHome>
  </Container>
);

export { SimpleMessage };
