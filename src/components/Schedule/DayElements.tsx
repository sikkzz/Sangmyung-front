import styled from "styled-components";

const Layout = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 0.65em;
    padding: 2px;
    color: #686868;
`

const Col = styled.div`
    width: 12.9%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-left: 1%;
    background: rgba(235, 207, 198, 0.4);
    border-radius: 10px;
`

export {Layout, Col}