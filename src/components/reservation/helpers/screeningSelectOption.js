const setScreeningString = (start, end, date) => `
      ${new Date(date).toDateString()}
      ${new Date(start).toISOString().split("T")[1].slice(0, 5)} - 
      ${new Date(end).toISOString().split("T")[1].slice(0, 5)}`;

export { setScreeningString };
