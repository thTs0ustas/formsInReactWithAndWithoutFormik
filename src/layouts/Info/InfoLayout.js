// import react, {useState ,useEffect} from  'react';

import {useFormik} from 'formik'
import {useProvider} from '../../model'
import React, {useState, useEffect}  from 'react';


import "bootstrap/dist/css/bootstrap.min.css";





import Footer from '../../components/footer/Footer';
import { Section, InfoSidebar, InfoMain, GridWrapper, Input, Label, Div, Submit, Edit , ButtonDiv } from './styles/infoElements';



import axios from 'axios';
export const InfoPage = () => {  
    // const [{username, token}] = useProvider(["userInfo.username", "userInfo.token"])
    let username = window.sessionStorage.getItem("username")
    const token = window.sessionStorage.getItem("token")
    const [data, setData] = useState({username: '', password: '', first_name:'', last_name: '', email:'', address:'', postal:'', birth_date:''});
    const [edit, setEdit] = useState(true)

    const getData = (token) => {
    console.log(username)
    console.log(`http://localhost:4000/users/${username}`)
    axios.get(`http://localhost:4000/users/${username}`, {
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
  // console.log(data)
  
  useEffect(() => {
    getData(token);
  }, []);
  
  // useEffect(() => {
    
  //   formik.initialValues = {
  //     username: data?.username ,
  //     first_name: data?.first_name, 
  //     last_name: data?.last_name,
  //     email: data?.email ? data?.email : "",
  //     address: data?.address ? data?.address : "",
  //     postal: data?.postal ? data?.postal : "",
  //     birth_date: data?.birth_date ? data?.birth_date : "",
  //   }
  //   console.log(formik.initialValues)
  // }, [data]);
  
  
  const formik = useFormik({
    initialValues: {
      // username: data?.username ? data?.username : "",
      // first_name: data?.first_name? data?.first_name : "", 
      // last_name: data?.last_name? data?.last_name : "",
      // email: data?.email ? data?.email : "",
      // address: data?.address ? data?.address : "",
      // postal: data?.postal ? data?.postal : "",
      // birth_date: data?.birth_date ? data?.birth_date : "",
      username: "",
      first_name: "", 
      last_name: "",
      email: "",
      address: "",
      postal: "",
      birth_date: "",
    },
    onSubmit: (values) => {
      console.log('-=---=-=-=-=-=-=')
      console.log("values", values)
      console.log("data", data)
      console.log('-=---=-=-=-=-=-=')
      axios.put(`http://localhost:4000/users/update/${username}`, {
        username:  data?.username || values.username ,
        first_name:  data?.first_name || values.first_name,
        last_name:  data?.last_name || values.last_name,
        email:  data?.email || values.email,
        address: data?.address || values.address,
        postal:  data?.postal || values.postal,
        birth_date:  data?.birth_date || values.birth_date,
      }).then((res) => {
             
             const newData = res.data;
             setData(newData)
             username = values.username;
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
              
                  <form onSubmit={formik.handleSubmit}>
                    <Div>
                      <Label htmlFor="username"> Username:</Label>
                      <Input type="text" name= "username" id="username" onChange={formik.handleChange} value={  formik.values.username || data.username  }  placeholder={data.username} disabled={edit ? true : false} />
                    </Div>
                    <Div>
                      <Label htmlFor="first_name"> First Name:</Label>
                      <Input type="text" name = "first_name" id="first_names" onChange={formik.handleChange} value={ formik.values.first_name || data.first_name}   placeholder={data.first_name} disabled={edit ? true : false}/>
                    </Div>
                    <Div>
                      <Label htmlFor="last_name"> Last Name:</Label>
                      <Input type="text" name = "last_name" id="last_name" onChange={formik.handleChange} value={ formik.values.last_name || data.last_name }   placeholder={data.last_name} disabled={edit ? true : false}/>  
                    </Div>
                    <Div>
                      <Label htmlFor="email">Email:</Label>
                      <Input type="email" name="email" id="email" onChange={formik.handleChange} value={ formik.values.email || data.email }  placeholder={data.email} disabled={edit ? true : false} />
                    </Div>
                    <Div>
                      <Label htmlFor='address'>Address:</Label>
                      <Input type="text" name="address" id="address" onChange={formik.handleChange} value={ formik.values.address || data.address}  placeholder={data.address} disabled={edit ? true : false}/>
                    </Div>
                    <Div>
                      <Label htmlFor='postal'>Postal:</Label>
                      <Input type="text" name="postal" id="postal" onChange={formik.handleChange} value={ formik.values.postal || data.postal}  placeholder={data.postal} disabled={edit ? true : false}/>
                    </Div>
                    <Div>
                      <Label htmlFor='birth_date'>Birth Date:</Label>
                      <Input type="text" name="birth_date" id="birth_date" onChange={formik.handleChange} value={formik.values.birth_date || data.birth_date}  placeholder={data.birth_date} disabled={edit ? true : false}/>
                    </Div>
                    <ButtonDiv>
                      <Edit onClick= {(e) => {
                            e.stopPropagation() 
                            e.preventDefault()
                            setEdit(!edit)
                          }} 
                          alternate={edit ? true : false}>
                          {edit ? "edit" : "cancel"}
                      </Edit>
                      <Submit  type="submit" alternate={edit ? true : false}>Submit</Submit>
                    </ButtonDiv>
                    
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

