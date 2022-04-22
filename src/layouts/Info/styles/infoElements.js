import styled from 'styled-components';



export const Section = styled.section`
    min-height: 100vh;
    background-color: ${(props) => props.theme.bgMain};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;

export const GridWrapper = styled.div`
    min-height: 80vh;
    width: 60vw;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 350px 1fr 1fr;
    grid-template-rows: 300px 600px;
    @media screen and (max-width: 1600px) {
        width: 80vh;
    }
`;

export const InfoSidebar = styled.div`
    background-color: #750f29;
    grid-column: 1/2;
    grid-row: 1/2;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1014px) {
        grid-column: 1/4;
        grid-row: 1/2;
        align-items: center;
    }
`;

export const InfoMain = styled.div`
    padding: 0 20px;
    grid-column: 2/4;
    grid-row: 1/3;
    overflow-y: auto;
    @media screen and (max-width: 1014px) {
        grid-column: 1/4;
        grid-row: 2/4;
    }
    & div {
        width: 100%;
    }
    //On smaller screens center the form
    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    /* width */
    &::-webkit-scrollbar {
    width: 12px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 20px ${(props) => props.theme.primary};;
    border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    
    background-color: #750f29;
    background-color: ${(props) => props.theme.primary};
    border-radius: 10px;
    }
`;
    





