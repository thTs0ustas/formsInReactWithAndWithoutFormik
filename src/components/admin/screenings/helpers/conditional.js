import { IconContainer } from "../styledComponents/IconContainer";

const decideTdData = (data, accessor, Icon) => {
  let tdData;
  switch (accessor) {
    case "movie_date":
      tdData = data[accessor] ? data[accessor] : "——";
      break;
    case "movie_starts":
      tdData = data[accessor] ? data[accessor] : "——";
      break;
    case "movie_ends":
      tdData = data[accessor] ? data[accessor] : "——";
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
