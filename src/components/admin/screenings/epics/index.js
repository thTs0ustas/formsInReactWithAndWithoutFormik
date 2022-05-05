import { combineEpics } from "redux-observable";
import { getScreeningsEpic } from "./getScreeningsEpic";
import { addAdminScreeningsEpic } from "./addAdminScreeningEpic";
import { updateScreeningEpic } from "./updateScreeningEpic";

export const adminScreeningsEpics = combineEpics(
  getScreeningsEpic,
  addAdminScreeningsEpic,
  updateScreeningEpic
);
