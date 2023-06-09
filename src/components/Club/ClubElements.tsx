import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

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

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
  ${media.tabletLarge`font-size: 28px;margin-top: 20px;`};
  ${media.tablet`font-size: 26px;margin-top: 20px;`};
  ${media.mobile`font-size: 24px;margin-top: 20px;`};
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  margin-top: 60px;
  border-top: 1px solid #000;
  /* border: 1px solid #000; */
`;

const ColGroup = styled.colgroup``;

const TableCol = styled.col<{ size: string }>`
  width: ${(props) => props.size};
`;

const THead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th<{ size: string }>`
  width: ${(props) => props.size};
  padding: 22px 10px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f6f9ef;
  font-size: 18px;
  line-height: 26px;
`;

const TBody = styled.tbody``;

const Td = styled.td`
  position: relative;
  padding: 23px 10px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
`;

const TdImageBox = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;

const TdImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const TdTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const TdKind = styled.div``;

const TdActive = styled.div`
  text-align: left;
`;

const TdIconBox = styled.div``;

const TdLink = styled.a`
    
`

export {
  Layout,
  Col,
  Box,
  Title,
  Table,
  ColGroup,
  TableCol,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TdImageBox,
  TdImage,
  TdTitle,
  TdKind,
  TdActive,
  TdLink,
  TdIconBox,
};
