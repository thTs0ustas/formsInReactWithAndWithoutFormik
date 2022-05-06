import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "./styledComponents/Container";
import { LinkToHome } from "./styledComponents/LinkToHome";

function SimpleMessage({ message }) {
  return (
    <Container>
      <h2>{message}</h2>
      <LinkToHome>
        <Link to='/'>Homepage</Link>
      </LinkToHome>
    </Container>
  );
}
SimpleMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export { SimpleMessage };
