import styled from "styled-components";



//input + label Div
export const Div = styled.div`
    display: flex;
    height: 60px;
    max-width: 800px;
    @media screen and (max-width: 655px) {
        /* display:block; */
        flex-direction: column;
        height: auto;
    }
`;


export const Input = styled.input`
    flex: 30%;
    padding: 10px;
    width: 100%;
    outline:none;
    background-color: white;
    border: none;
    border-bottom: 1px solid grey;
    @media screen and (max-width: 655px) {
        flex: 100%;
    }
    
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
    @media screen and (max-width: 655px) {
        flex: 100%;
        width: 100%;
        background-color: transparent;
    }
`;


//Submit and Edit Button generic styling
const btn = styled.button`
    outline: none;
    border: none;
    text-align: center;
    padding: 10px 20px;
    display: inline;
    width: 120px;
`;

export const Submit = styled(btn)`
    background-color: ${(props) => props.alternate ? "rgb(185, 185, 185)" : "red"};
    color: ${(props) => props.alternate ? "#26262674" : "white"};
    @media screen and (max-width: 655px) {
        width: 50%;
    }
`;
export const Edit = styled(btn)`
    background-color: ${(props) => props.alternate ? "white" : "rgb(185, 185, 185)"};
    margin-right: 10px;
    @media screen and (max-width: 655px) {
        width: 50%;
    }
`;

//Container for buttons
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    max-width: 800px;
`;