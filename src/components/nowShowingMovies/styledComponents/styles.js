import styled from "styled-components";

const NowShowingContainer = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    justify-content: center;
    margin: -15px;
    line-height: 2;
    -webkit-text-size-adjust: none;
    font-family: mrs-eaves-xl-serif, sans-serif;
`;

const NowShowingStacker = styled.ul`
    list-style: none;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const NowShowingStack = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    list-style: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    width: 90%;
    padding: 0px;
    margin: 0px;
    margin-bottom: 25px;
    & img {
        width: inline;
        ${'' /* min-width: 350px;
        max-width: 450px; */}
    }

    & p {
        margin-left: 0px;
    }

    & h2 {
        margin-left: 0px;
        width: 90%;
    }
`;


export {
    NowShowingStacker,
    NowShowingStack,
    NowShowingContainer,
};