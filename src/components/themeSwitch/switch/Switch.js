import { IoMoon } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "../styledComponents/switchStyles";
import { setTheme } from "../../../rModel";

export function Switch() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <CheckBoxWrapper>
      <IoMoon
        color='crimson'
        style={{
          position: "absolute",
          left: 4,
          top: 4,
          zIndex: 1,
          visibility: theme === "light" ? "hidden" : "visible",
        }}
      />
      <CheckBox
        id='checkbox'
        type='checkbox'
        checked={theme !== "light"}
        onChange={() => dispatch(setTheme())}
      />
      <CheckBoxLabel htmlFor='checkbox' />
      <BsFillSunFill
        color='crimson'
        style={{
          position: "absolute",
          left: 28,
          top: 4,
          zIndex: 1,
          visibility: theme !== "light" ? "hidden" : "visible",
        }}
      />
    </CheckBoxWrapper>
  );
}
