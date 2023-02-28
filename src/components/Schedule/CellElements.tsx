import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ColCell = styled.div`
  width: 13.5%;
  height: 93%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.4px solid rgba(128, 128, 128, 0.6);
  border-radius: 3px;
  font-size: 0.8em;
`;

const ColSpan = styled.span`
  margin: 4px 0 0 4px;
`;

export { Layout, Row, ColCell, ColSpan };
