import React from "react";
import { SelectInput } from "./selectInput";
import { FormClone } from "./formClone";
import { PriceOutput } from "./priceOutput";
import { Button } from "./button";

export const ReservationForm = ({ handleChange, initialValues, requests, ...props }) => {
  const getProps = ({ ...props }) => {
    return { ...props };
  };
  return (
    <div className="container m-2">
      <h4 className="text-decoration-underline">Reservation Form</h4>
      <FormClone {...props}>
        <SelectInput
          {...getProps({
            width: false,
            name: "cinema",
            label: "Movies",
            disabledRef: "cinemas",
            handleChange: handleChange,
            initialValues: initialValues,
            requests: requests,
            value: "address",
            child: "address",
          })}
        />
        {/*<SelectInput name="movies" label="Movies" disabledRef="cinemas" />*/}
        {/*<SelectInput name="auditoriums" label="Auditoriums" disabledRef="movies" />*/}
        {/*<SelectInput name="screenings" label="Screenings" disabledRef="auditoriums" />*/}
        {/*<SelectInput width="w-25" name="seats" label="Seats" disabledRef="screenings" />*/}
        <PriceOutput />
        <div>
          <Button style="primary" type="submit">
            Submit
          </Button>
          <Button style="warning" type="reset">
            Submit
          </Button>
        </div>
      </FormClone>
    </div>
  );
};
