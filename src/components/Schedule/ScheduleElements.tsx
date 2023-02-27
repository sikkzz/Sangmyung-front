import styled from "styled-components";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  font-size: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ControlBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Table = styled.table`
  display: flex;
  width: 50vw;
  height: 50vh;
  justify-content: center;
`;

const TBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;

const Td = styled.td`
  display: flex;
  border: 1px solid gray;
  width: 5vw;
  height: 5vh;
`;

const Button = styled.button``;

const Span = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export { Layout, Col, Box, ControlBox, Table, TBody, Tr, Td, Button, Span };
