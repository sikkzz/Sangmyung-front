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
  /* justify-content: space-between; */
  align-items: center;
`;

const ColCell = styled.div`
  width: 14.28%;
  height: 93%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.4px solid rgba(128, 128, 128, 0.6);
  border-radius: 3px;
  font-size: 0.8em;

  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
    background-color: #f3c5b6;
  }
`;

const ColSpan = styled.span`
  margin: 4px 0 0 4px;
`;

export { Layout, Row, ColCell, ColSpan };
