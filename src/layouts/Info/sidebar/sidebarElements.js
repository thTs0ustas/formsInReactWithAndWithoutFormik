import styled from "styled-components";

export const InfoDiv = styled.div`
    color: white;
    
    margin-bottom: 10px;
    width: 75%;
    & h1 {
        color: ${(props) => props.theme.secondary};
        font-size: 30px;
        position: relative;
        margin-bottom: 40px;
    }
    & h1::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.white};
        bottom: -5px;
        left: 0;

    }
    & p svg {
        font-size: 25px;
        padding: 2px;
    }
`;

export const SideBarBtn = styled.button`
    width: 75%;
    background-color: ${(props) => props.theme.primary};
    color: white;
    display: block;
    font-size: 20px;
    padding: 10px 0;
    border: none;
    margin-bottom: 5px;
    position: relative;
    &:active, :focus {
        background-color: ${(props) => props.theme.secondary2};
        color: black;
    }

    & svg {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);

    }
`;

export const FirstNamePara = styled.p`
    font-size: 25px;
`;

