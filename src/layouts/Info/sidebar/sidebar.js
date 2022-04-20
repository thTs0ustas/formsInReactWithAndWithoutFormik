import React, { useEffect } from "react";
import { SideBarBtn, InfoDiv, FirstNamePara } from "./sidebarElements";
import {FiArchive, FiSettings} from 'react-icons/fi';
import {BsPersonCircle} from 'react-icons/bs';


const SideDiv = (props) => {
    
    useEffect(() => {
      localStorage.getItem('first_name');
    }, [])
    return (
    <>
      <InfoDiv>
        
        
        <h1>User Account:</h1>
        <FirstNamePara> 
          <BsPersonCircle/> {localStorage.getItem('first_name').toUpperCase()}
        </FirstNamePara>
      </InfoDiv>
      
      <SideBarBtn onClick={() => props.setSelected("form")}> 
        <FiSettings /> User Info
      </SideBarBtn >
      <SideBarBtn onClick={() => props.setSelected("history")}>
        <FiArchive /> Purchase History
      </SideBarBtn >
              
    </>
  );
};

export default SideDiv;
