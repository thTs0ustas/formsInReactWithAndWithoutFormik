import { IconContainer } from "../styledComponents/IconContainer";

const decideTdData = (data, accessor, Icon) => {
  let tdData;
  switch (accessor) {
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
