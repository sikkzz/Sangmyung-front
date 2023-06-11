import styled from "styled-components";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div``;

const DateBox = styled.div`
  padding: 23px 0;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const Month = styled.h2`
  font-size: 35px;
  font-weight: 700;
  color: #000;
  margin-right: 40px;
  max-width: 220px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #f7f7f7;
  border: 1px solid #e6e9ed;

  /* &:first-of-type{
    margin-left: 40px;
  } */
`;

export { Layout, Col, Box, DateBox, Month, IconBox };
