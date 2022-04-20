//
import React, {useState, useEffect}  from 'react';
import {Input, Label, Div, Submit, Edit , ButtonDiv } from './UserFormElements'
import axios from 'axios';




export const Form = (props) => {  
    // const [{username, token, id}] = useProvider(["userInfo.username", "userInfo.token", "userInfo.id"])
    
    // const [state] = useProvider()
    // console.log(state.userInfo)

    let username = window.sessionStorage.getItem("username")
    const token = window.sessionStorage.getItem("token")
    const id = window.sessionStorage.getItem("id")
    console.log(id)
    


    const [data, setData] = useState({id:'', username: '', password: '', first_name:'', last_name: '', email:'', address:'', postal:'', birth_date:''});
    const [edit, setEdit] = useState(true)
    
    localStorage.setItem('first_name', data.first_name)
    const getData = (token) => {
    
    axios.get(`http://localhost:4000/users/${+id}`, {
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      } 
    }).then((res) => {
      const myUser = res.data;
      console.log('myUser', myUser)
      setData((prev) => ({
        ...prev, ...myUser
      }))
    });
  };

  useEffect(() => {
    getData(token);
  }, []);

  const onSubmit= (values) => {
    
    axios.put(`http://localhost:4000/users/update/${id}`, data).then((res) => {
           
           const newData = res.data;
           username = data.username;
           setData(newData);
           
         })
    }
    
    
    return (
      <>
        
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
            placeholder={data.username}
            disabled={edit ? true : false}
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
            placeholder={data.first_name}
            disabled={edit ? true : false}
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
            placeholder={data.last_name}
            disabled={edit ? true : false}
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
            placeholder={data.email}
            disabled={edit ? true : false}
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
            placeholder={data.address}
            disabled={edit ? true : false}
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
            placeholder={data.postal}
            disabled={edit ? true : false}
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
            value={data.birth_date}
            placeholder={data.birth_date.split('T')[0]}
            disabled={edit ? true : false}
          />
        </Div>
        <ButtonDiv>
          <Edit
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setEdit(!edit);
            }}
            alternate={edit ? true : false}
          >
            {edit ? "edit" : "cancel"}
          </Edit>
          <Submit
            type='submit'
            onClick={onSubmit}
            disabled={edit ? true : false}
            alternate={edit ? true : false}
          >
            Submit
          </Submit>
        </ButtonDiv>
      </form>
      </>
      
    );
}

export default Form;