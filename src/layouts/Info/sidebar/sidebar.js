import React from "react";
import { FirstNamePara, InfoDiv, SideBarBtn } from "./sidebarElements";
import { FiArchive, FiSettings } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { selectors, useProvider } from "../../../model";

const SideDiv = (props) => {
  const [{ userInfo }] = useProvider([selectors.userInfo]);

  return (
    <>
      <InfoDiv>
        <h1>User Account:</h1>
        <FirstNamePara>
          <BsPersonCircle /> {userInfo.username.toUpperCase()}
        </FirstNamePara>
      </InfoDiv>

      <SideBarBtn onClick={() => props.setSelected("form")}>
        <FiSettings /> User Info
      </SideBarBtn>
      <SideBarBtn onClick={() => props.setSelected("history")}>
        <FiArchive /> Purchase History
      </SideBarBtn>
    </>
  );
};

export default SideDiv;
