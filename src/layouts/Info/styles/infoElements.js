import styled from 'styled-components';


export const Section = styled.section`
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondary};
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
    background-color: orange;
    grid-area: sidebar;
    height: 100%;
`;

export const InfoMain = styled.div`
    background-color: pink;
    grid-area: main;
    height: 100%;
`;

