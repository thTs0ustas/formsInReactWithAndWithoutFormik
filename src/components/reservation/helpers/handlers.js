import { addSeat, removeSeat, setInputValues } from "../../../features";

const handleSeatAdd = (dispatch) => (seat) => {
  dispatch(
    addSeat({
      name: "seat",
      value: seat,
    })
  );
};
const handleSeatRemove = (dispatch) => (id) => {
  dispatch(removeSeat(id));
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
