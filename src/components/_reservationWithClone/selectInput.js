import React from "react";
import { useForm } from "./formClone";

export const SelectInput = ({
  name,
  label,
  width,
  inputValues,
  disabledRef,
  value,
  prevItemIdRef,
}) => {
  const { state, dispatch } = useForm();
  console.log(state);
  return (
    <div>
      <label className="w-25 d-inline-block form-label mt-4" htmlFor={name}>
        {label}:
      </label>
      <select
        name={name}
        className={`form-select d-inline-block mx-auto h-25 ${width ? width : "w-50"}`}
        id={name}
        aria-label={name}
        onChange={(event) => dispatch({ type: "INPUT_CHANGE", payload: event.target })}
        disabled={prevItemIdRef.current && !inputValues[disabledRef]}
      >
        <option value="">Choose...</option>
        {state.requests[name].map((item) => (
          <option key={item.id} value={item[value]}>
            {}
          </option>
        ))}
      </select>
    </div>
  );
};
