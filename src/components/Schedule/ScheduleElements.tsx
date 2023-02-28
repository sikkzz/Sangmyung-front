import styled from "styled-components";
import { IoIosArrowBack as LeftArrow } from "react-icons/io";
import { IoIosArrowForward as RightArrow } from "react-icons/io";

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

const ControlLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ControlRightBox = styled.div`
  display: flex;
`;

const SelectBox = styled.div``;

// const Select = styled.select``;

// const Option = styled.option``;

const Table = styled.table`
  display: flex;
  width: 50vw;
  width: 1080px;
  height: 50vh;
  justify-content: center;
`;

const TBody = styled.tbody`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  /* height: 2rem; */
`;

const Td = styled.td`
  display: flex;
  border: 1px solid blue;
  align-items: center;
  justify-content: center;
  /* width: 5vw; */
  width: 14%;
  width: 120px;
  /* height: 5vh; */
  padding: 20px;
`;

const LeftArrows = styled(LeftArrow)`
  display: flex;
  cursor: pointer;
  /* margin-top: 25px; */
  font-size: 30px;
`;

const RightArrows = styled(RightArrow)`
  display: flex;
  cursor: pointer;
  /* margin-top: 25px; */
  font-size: 30px;
`;

const Span = styled.span`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
`;

export {
  Layout,
  Col,
  Box,
  ControlBox,
  ControlLeftBox,
  ControlRightBox,
  SelectBox,
  //   Select,
  //   Option,
  Table,
  TBody,
  Tr,
  Td,
  Span,
  LeftArrows,
  RightArrows,
};
