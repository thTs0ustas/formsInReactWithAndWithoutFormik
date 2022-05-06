import { Pagination } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import PropTypes from "prop-types";

function PaginationBasic({ numberOfPages, page, setPage }) {
  const items = [];
  Array(numberOfPages)
    .fill("")
    .forEach((_, i) =>
      items.push(
        <Pagination.Item onClick={() => setPage(i)} key={uuid4()} active={page === i}>
          {i + 1}
        </Pagination.Item>
      )
    );
  return <Pagination>{items}</Pagination>;
}

PaginationBasic.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
export { PaginationBasic };
