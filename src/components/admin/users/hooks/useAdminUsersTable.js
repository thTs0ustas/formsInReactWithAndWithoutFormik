import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { getUsersAction } from "../actions/getUsersAction";
import { userAdminSelector } from "../selectors/selectors";

const useAdminUsersTable = (eventK) => {
  const { id, token, users } = useSelector(userAdminSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventK === "users" && isEmpty(users)) {
      dispatch(getUsersAction({ id, token }));
    }
  }, [eventK]);
};

export { useAdminUsersTable };
