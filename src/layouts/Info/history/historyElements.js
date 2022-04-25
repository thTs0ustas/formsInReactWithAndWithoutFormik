import styled from "styled-components";


export const HistoryDiv = styled.div`
    
`;

export const MovieItem = styled.div`
    background-color: white;
    max-width: 800px;
    margin-bottom: 10px;
    margin: 10px auto;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        margin: 10px auto;
    }
`;

export const TopDiv = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(128, 128, 128, 0.237);
    & div:nth-child(2) {
        padding: 10px;
        width: 80%;
    }
    /* @media screen and (max-width: 1200px) {
        & div { flex-basis: 100%;}
        border-bottom: none;
    } */
    & div:nth-child(1) {
        width: 20%;
        
    }

    @media screen and (max-width: 1800px) {
       & div {
            flex-basis: 100%;
        }
    }

    & h2 {
        color: ${(props) => props.theme.bgMain};
    }
    
`;


export const Image = styled.img`
    width: 140px;
    height: 100%;
    max-height: 120px;
    object-fit: cover;
    padding: 7px;
    /* @media screen and (max-width: 1000px) {
        width: 100%;
        max-height: 150px;
    } */
    
`;


//Style the bottom of the card
export const BottomDiv = styled.div`
    padding: 10px;
    position: relative;
    width: 100%;
    & h2 {
        color: ${(props) => props.theme.bgMain};
    }
    
`;

export const Para = styled.p`
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 900px;
    font-family: 'Arial';
    display: inline;
    margin-right: 20px;
    color: ${(props) => props.theme.bgMain};
    @media screen and (max-width: 1681px) {
        display: block;
    }
`;

export const Span = styled.span`
    color: ${(props) => props.theme.primary};
    font-style: italic;
`;


export const CardNum = styled.span`
    font-size: 17px;
    position: absolute;
    right: 10px;
    bottom: 10px;
`;