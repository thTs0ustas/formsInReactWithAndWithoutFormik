//
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonDiv, Div, Edit, Input, Label, Submit } from "./UserFormElements";
import updateUserAction from "../actions/updateUserAction";

function Form() {
  const { id, username, first_name, last_name, email, address, postal, birth_date } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const [data, setData] = useState({
    username,
    first_name,
    last_name,
    birth_date,
    email,
    address,
    postal,
  });
  const [edit, setEdit] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateUserAction({ id, data }));
    setEdit(!edit);
  };

  return (
    <form>
      <Div>
        <Label htmlFor='username'> Username:</Label>
        <Input
          type='text'
          name='username'
          id='username'
          onChange={(event) => {
            setData({
              ...data,
              username: event.target.value,
            });
          }}
          value={data.username}
          disabled={edit}
        />
      </Div>
      <Div>
        <Label htmlFor='first_name'> First Name:</Label>
        <Input
          type='text'
          name='first_name'
          id='first_names'
          onChange={(event) => {
            setData({
              ...data,
              first_name: event.target.value,
            });
          }}
          value={data.first_name}
          disabled={edit}
        />
      </Div>
      <Div>
        <Label htmlFor='last_name'> Last Name:</Label>
        <Input
          type='text'
          name='last_name'
          id='last_name'
          onChange={(event) => {
            setData({
              ...data,
              last_name: event.target.value,
            });
          }}
          value={data.last_name}
          disabled={edit}
        />
      </Div>
      <Div>
        <Label htmlFor='email'>Email:</Label>
        <Input
          type='email'
          name='email'
          id='email'
          onChange={(event) => {
            setData({
              ...data,
              email: event.target.value,
            });
          }}
          value={data.email}
          disabled={edit}
        />
      </Div>
      <Div>
        <Label htmlFor='address'>Address:</Label>
        <Input
          type='text'
          name='address'
          id='address'
          onChange={(event) => {
            setData({
              ...data,
              address: event.target.value,
            });
          }}
          value={data.address}
          disabled={edit}
        />
      </Div>
      <Div>
        <Label htmlFor='postal'>Postal:</Label>
        <Input
          type='text'
          name='postal'
          id='postal'
          onChange={(event) => {
            setData({
              ...data,
              postal: event.target.value,
            });
          }}
          value={data.postal}
          disabled={edit}
        />
      </Div>
      <Div>
        <Label htmlFor='birth_date'>Birth Date:</Label>
        <Input
          type='text'
          name='birth_date'
          id='birth_date'
          onChange={(event) => {
            setData({
              ...data,
              birth_date: event.target.value,
            });
          }}
          value={data.birth_date?.split("T")[0]}
          disabled={edit}
        />
      </Div>
      <ButtonDiv>
        <Edit
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setEdit(!edit);
          }}
          alternate={edit}
        >
          {edit ? "edit" : "cancel"}
        </Edit>
        <Submit type='submit' onClick={onSubmit} disabled={edit} alternate={edit}>
          Submit
        </Submit>
      </ButtonDiv>
    </form>
  );
}

export { Form };
