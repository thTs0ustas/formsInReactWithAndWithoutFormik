import styled from 'styled-components';


export const Section = styled.section`
    min-height: 100vh;
    background-color: ${(props) => props.theme.bgMain};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GridWrapper = styled.div`
    height: 80vh;
    width: 80vw;
    display: grid;
    grid-template-areas: "sidebar main main"; 
`;

export const InfoSidebar = styled.div`
    background-color: rgb(36, 3, 18);
    grid-area: sidebar;
    height: 100%;
`;

export const InfoMain = styled.div`
    background-color: ${(props) => props.theme.bgMain};
    grid-area: main;
    height: 100%;
    padding: 0 20px;
`;

export const Div = styled.div`
    display: flex;
    height: 60px;

`;


export const Input = styled.input`
    flex: 30%;
    padding: 10px;
    width: 100%;

    
`;

export const Label = styled.label`
    
    font-weight: 500;
    background-color: rgb(38, 2, 20);
    margin: auto auto;
    color: white;
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.183);
`;