import { upperFirst } from "lodash";
import { IconContainer } from "../styledComponents";

const decideTdData = (data, accessor, Icon, index) => {
  let tdData;
  switch (accessor) {
    case "#":
      tdData = index + 1;
      break;
    case "genre":
      tdData = upperFirst(data.genre);
      break;
    case "delete":
      tdData = (
        <IconContainer>
          <Icon />
        </IconContainer>
      );
      break;
    default:
      tdData = data[accessor] ? data[accessor] : "——";
  }
  return tdData;
};

export { decideTdData };
