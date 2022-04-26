export const columns = [
  { label: "#", accessor: "id", sortable: true },
  { label: "Title", accessor: "title", sortable: true },
  { label: "Hall", accessor: "auditorium_id", sortable: true },
  { label: "Movie Starts", accessor: "movie_starts", sortable: true },
  { label: "Movie Ends", accessor: "movie_ends", sortable: true },
  { label: "Movie Date", accessor: "movie_date", sortable: true },
  { label: "Delete", accessor: "delete", sortable: false },
];
