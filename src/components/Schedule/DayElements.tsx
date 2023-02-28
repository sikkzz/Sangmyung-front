import styled from "styled-components";

const Layout = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    font-weight: 600;
    font-size: 0.65em;
    padding: 2px;
    color: #686868;
`

const Col = styled.div`
    width: 14.28%;
    height: 100%;
    height: 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    justify-content: center;
    /* align-items: flex-start; */
    align-items: center;
    /* padding-left: 1%; */
    background: rgba(235, 207, 198, 1);
    /* border: 1px solid #000; */
    border-radius: 10px;
`

export {Layout, Col}