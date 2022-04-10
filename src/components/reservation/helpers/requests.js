import { forEach } from "lodash";
import axios from "axios";
import { handleError } from "../../../model/actions";

const fetchRequest = ({ types, action, dispatch, baseUrl }) => {
  forEach(
    types?.split(" "),
    (type) =>
      type &&
      axios
        .get(`${baseUrl}/${type}`)
        .then((response) => {
          dispatch(
            action({
              key:
                type.split("/")[0] === "seat" ||
                type.split("/")[0] === "reservedSeat"
                  ? `${type.split("/")[0]}s`
                  : `${type}s`,
              value: response.data,
            })
          );
        })
        .catch((error) =>
          dispatch(
            handleError({ message: error.message, time: new Date().getTime() })
          )
        )
  );
};

const nextRequest = (aId = null, sId = null) => ({
  movie: "cinema",
  cinema: "auditorium",
  auditorium: "screening",
  screening: `seat/${aId[0]} reservedSeat/${sId} `,
});

export { fetchRequest, nextRequest };
