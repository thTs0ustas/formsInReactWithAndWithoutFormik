// import react, {useState ,useEffect} from  'react';

import {useFormik} from 'formik'

import React, {useState, useEffect}  from 'react';


import "bootstrap/dist/css/bootstrap.min.css";





import Footer from '../../components/footer/Footer';
import { Section, InfoSidebar, InfoMain, GridWrapper, Input, Label, Div } from './styles/infoElements';
// import { SignUpBar } from '../../theme';
// import { SignupBarPart } from '../GlobalParts/SignupBarPart';

// import { useForm } from "react-hook-form";
import axios from 'axios';
export const InfoPage = () => {
    const username = sessionStorage.getItem("username");  
    
    const [data, setData] = useState({username: '', password: '', first_name:'', last_name: '', email:'', address:'', postal:'', birth_date:''});
    const [edit, setEdit] = useState(true)

    const getData = () => {
    axios.get(`http://localhost:4000/users/${username }`).then((res) => {
      const myUser = res.data;
      console.log('myUser', myUser)
      setData((prev) => ({
        ...prev, ...myUser
      }))
      
    });
    
  };
  console.log(data)
  
  useEffect(() => {
    getData();
  }, []);
  
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      first_name: '', 
      last_name: '',
      email: '',
      address: '',
      postal: '',
      birth_date: '',
    },
    onSubmit: (values) => {
      axios.put(`http://localhost:4000/users/update/${username}`, {
        username: values.username,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        address: values.address,
        postal: values.postal,
        birth_date: values.birth_date,
      }).then((res) => {
             const newData = res.data;
             setData(newData)
             
           })
      }
  
  })
  console.log('Form Values', formik.values)

    
    return (
      <>
        <Section>
          <GridWrapper>
            <InfoSidebar></InfoSidebar>
            <InfoMain>
              
                  <form onSubmit={formik.handleSubmit} >
                    <Div>
                      <Label htmlFor="username"> Username:</Label>
                      <Input type="text" name= "username" onChange={formik.handleChange} value={ formik.values.username || data.username} placeholder={data.username} disabled={edit ? true : false} />
                    </Div>
                    <Div>
                      <Label htmlFor="first_name"> Username:</Label>
                      <Input type="text" name = "first_name" onChange={formik.handleChange} value={ formik.values.username || data.first_name}   placeholder={data.first_name} disabled={edit ? true : false}/>
                    </Div>
                    <Div>
                      <Label htmlFor="last_name"> Lastname:</Label>
                      <Input type="text" name = "last_name" onChange={formik.handleChange} value={ formik.values.username || data.last_name}   placeholder={data.last_name} disabled={edit ? true : false}/>  
                    </Div>
                    <Div>
                      <Label htmlFor="email">Email:</Label>
                      <Input type="email" name="email" id="email" onChange={formik.handleChange} value={ formik.values.username || data.email}  placeholder={data.email} disabled={edit ? true : false} />
                    </Div>
                    <Div>
                      <Label htmlFor='address'>Address:</Label>
                      <Input type="text" name="address" onChange={formik.handleChange} value={ formik.values.username || data.address}  placeholder={data.address} disabled={edit ? true : false}/>
                    </Div>
                    <Div>
                      <Label htmlFor='postal'>Postal:</Label>
                      <Input type="text" name="postal" onChange={formik.handleChange} value={ formik.values.username || data.postal}  placeholder={data.postal} disabled={edit ? true : false}/>
                    </Div>
                    <Div>
                      <Label htmlFor='birth_date'>Birth Date:</Label>
                      <Input type="text" name="birth_date" id="birth_date" onChange={formik.handleChange} value={ formik.values.username || data.birth_date}  placeholder={data.birth_date} disabled={edit ? true : false}/>
                    </Div>
                   
                    <button onClick= {(e) => {
                      e.stopPropagation() 
                      e.preventDefault()
                      setEdit(!edit)
                    }} 
                    >edit</button>
                    <button type="submit">submit</button>
                  </form>
              
            </InfoMain>
          </GridWrapper>
        </Section>
        <footer>
          <Footer />
        </footer>
      </>
    );
}

