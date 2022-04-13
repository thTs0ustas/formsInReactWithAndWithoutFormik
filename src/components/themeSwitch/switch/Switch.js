import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
} from "../styledComponents/switchStyles";
import { changeTheme, useProvider } from "../../../model";
import { IoMoon } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";

export const Switch = () => {
  const [{ theme }, dispatch] = useProvider(["theme"]);
  return (
    <CheckBoxWrapper>
      <IoMoon
        color='crimson'
        style={{
          position: "absolute",
          left: 4,
          top: 4,
          zIndex: 1,
          visibility: theme ? "hidden" : "visible",
        }}
      />
      <CheckBox
        id='checkbox'
        type='checkbox'
        checked={!theme}
        onChange={() => dispatch(changeTheme())}
      />
      <CheckBoxLabel htmlFor='checkbox' />
      <BsFillSunFill
        color='crimson'
        style={{
          position: "absolute",
          left: 28,
          top: 4,
          zIndex: 1,
          visibility: !theme ? "hidden" : "visible",
        }}
      />
    </CheckBoxWrapper>
  );
};
