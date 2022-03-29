import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: black;
  padding: 60px 50px;

  /* ----FOOTER----- */
  h2 {
    text-transform: uppercase;
    letter-spacing: 6px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .Boundary {
      padding: 0;
    }
    h2 {
      font-size: 20px;
      letter-spacing: 0;
      padding-bottom: 20px;
    }
    form {
      padding: 0;
      margin: 20px auto;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .menu {
      display: flex;
      flex-wrap: wrap;
    }
    .menu .col {
      /* flex: 50%; */
      padding: 10px;
    }
    .menu ul li {
      text-align: left;
    }
  }
  /* ---DESCRIPTION--- */
  .description {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  .description p {
    margin: 0 auto;
  }
  .description p a {
    color: #b09661;
    text-decoration: none;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    .description p {
      margin: 10px auto;
    }
  }
`;

// ------------FORM----------------
export const Boundary = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  width: 640px;
  margin: 50px auto;
  border-radius: 4px;
  padding: 30px 90px;
`;

export const Half = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 48%;
  border: 1px solid white;
  outline: 0;
  padding: 10px;
  height: 44px;
  background: transparent;
  font-size: 17px;
  &:focus {
    outline: none;
  }
  & ::placeholder {
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Full = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid white;
  padding: 2px;
  width: 100%;
  height: 44px;
  & input {
    flex-grow: 2;
    border: none;
    padding: 5px;
    font-size: 17px;

    &:focus {
      outline: none;
    }
    & ::placeholder {
      color: white;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
`;
export const SubscribeButton = styled.input`
  flex-grow: 2;
  border: none;
  padding: 5px;
  font-size: 17px;
  background: #b09661;
  color: black;
  margin: 5px 5px 5px 0;
  font-size: 17px;
  text-transform: uppercase;
  transition: 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #c1ad83;
  }
`;

// ------------MENU----------------
export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Column = styled.div`
  flex: 0 0 15%;
  & ul {
    list-style: none;
    padding-left: 0;
  }
  & ul li {
    margin-bottom: 20px;
  }
  & ul li a {
    display: block;
    margin-bottom: 6px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #b09661;
    }
  }
`;
export const Title = styled.div`
  margin-bottom: 20px;
  color: #b09661;
  text-transform: uppercase;
`;
