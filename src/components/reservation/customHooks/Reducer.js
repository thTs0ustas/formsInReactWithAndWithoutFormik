const reservationReducer = (state, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return {
        ...state,
        requests: {
          ...state.requests,
          [payload.key]: payload.value,
        },
      };

    case "INPUT_CHANGE":
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [payload.name]: payload.value,
        },
      };
    case "RESPONSE":
      return { ...state, response: payload };
    default:
      return state;
  }
};

export { reservationReducer };
