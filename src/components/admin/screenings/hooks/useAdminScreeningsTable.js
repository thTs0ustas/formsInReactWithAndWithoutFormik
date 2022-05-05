import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { userAdminSelector } from "../selectors/selectors";
import { getScreeningsAction } from "../actions/getScreeningsAction";

const useAdminScreeningsTable = (eventK) => {
  const { id, token, screenings } = useSelector(userAdminSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (eventK === "screenings" && isEmpty(screenings)) {
      dispatch(getScreeningsAction({ id, token }));
    }
  }, [eventK]);
};

export { useAdminScreeningsTable };
