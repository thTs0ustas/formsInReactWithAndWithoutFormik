import { setAdminMoviesOfTheMonth } from "../../../../features";

const handleSorting = (data, setter) => (sortField, sortOrder) => {
  if (sortField) {
    const sorted = [...data].sort((a, b) => {
      if (a.Movie[sortField] === null) return 1;
      if (b.Movie[sortField] === null) return -1;
      if (a.Movie[sortField] === null && b.Movie[sortField] === null) return 0;
      return (
        a.Movie[sortField].toString().localeCompare(b.Movie[sortField].toString(), "en", {
          numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
      );
    });
    setter(setAdminMoviesOfTheMonth(sorted));
  }
};

export { handleSorting };
