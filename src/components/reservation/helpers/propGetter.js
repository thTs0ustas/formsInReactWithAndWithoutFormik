export const ticketPropGetter = (props = {}) => ({
  type: "adult",
  left: true,
  subtract: true,
  add: true,
  ...props,
});
