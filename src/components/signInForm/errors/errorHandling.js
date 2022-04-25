import { isEmpty } from "lodash";

export const errorHandling = (data) => !isEmpty(data.message);
