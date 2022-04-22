import { addSeatAction, inputChangeAction, removeSeatAction } from "../../../model";

const handleSeatAdd = (dispatch) => (seat) => {
  dispatch(
    addSeatAction({
      name: "seat",
      value: seat,
    })
  );
};
const handleSeatRemove = (dispatch) => (id) => {
  dispatch(removeSeatAction(id));
};

const handleChange = (dispatch) => (event) => {
  dispatch(
    inputChangeAction({
      name: event.target.name,
      value: event.target.value,
    })
  );
};

export { handleChange, handleSeatAdd, handleSeatRemove };
