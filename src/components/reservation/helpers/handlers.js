import { addSeatAction, removeSeatAction } from "../../../model";
import { setInputValues } from "../../../features";

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
    setInputValues({
      name: event.target.name,
      value: event.target.value,
    })
  );
};

export { handleChange, handleSeatAdd, handleSeatRemove };
