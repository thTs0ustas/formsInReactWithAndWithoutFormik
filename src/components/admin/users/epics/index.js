import { combineEpics } from "redux-observable";
import { getUsersEpic } from "./getUsersEpic";
import { deleteAdminUserEpic } from "./deleteAdminUserEpic";
import { updateUserEpic } from "./updateUserEpic";

export const adminUsersEpics = combineEpics(getUsersEpic, deleteAdminUserEpic, updateUserEpic);
