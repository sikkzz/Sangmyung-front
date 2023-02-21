import styled from "styled-components";

const Layout = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f9fafb;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 200px 0;
`;

const Text = styled.p<{fontSize: string}>`
    max-width: 760px;
  font-size: 32px;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  line-height: 1.6;
  color: #191f28;
  text-align: center;
  margin-bottom: 50px;
  word-break: keep-all;
  white-space: pre-wrap;
`;

export { Layout, Col, Box, Text };
