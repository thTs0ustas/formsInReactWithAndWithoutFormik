import { Pagination } from "react-bootstrap";

const PaginationBasic = ({ numberOfPages, page, setPage }) => {
  let items = [];
  Array(numberOfPages)
    .fill("")
    .forEach((_, i) =>
      items.push(
        <Pagination.Item onClick={() => setPage(i)} key={i} active={page === i}>
          {i + 1}
        </Pagination.Item>
      )
    );
  return <Pagination>{items}</Pagination>;
};
export { PaginationBasic };
