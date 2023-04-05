import styled from "styled-components";

const Layout = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    font-size: 0.65em;
    padding: 2px;
    color: #686868;
`

const Col = styled.div`
    width: 14.28%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(235, 207, 198, 1);
    background: rgb(0,11,111);
    font-size: 15px;
    color: #fff;
    border-radius: 10px;
`

export {Layout, Col}