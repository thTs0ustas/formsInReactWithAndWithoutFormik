const handleData = (data) =>
  data.map((item) => ({
    id: item.id,
    title: item.Movie?.title,
  }));

export { handleData };
