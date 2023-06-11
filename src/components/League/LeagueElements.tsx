import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

import Img from "../../assets/league/background.png";

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
`;

const ResultBox = styled.div``;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  margin-top: 30px;
  border-top: 1px solid #000;
`;

const ColGroup = styled.colgroup``;

const TableCol = styled.col<{ size: string }>`
  width: ${(props) => props.size};
  ${media.tabletLarge`width: 0;display: none;`}
  ${media.tablet`width: 0;display: none;`}
  ${media.mobile`width: 0;display: none;`}
`;

const THead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th<{ size: string }>`
  width: ${(props) => props.size};
  padding: 14px 10px;
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

const TdMatch = styled.div`
  display: flex;
  justify-content: center;
`;

const TdTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(68% / 2);
`;

const TdImageBox = styled.div`
  width: 60px;
  height: 60px;
`;

const TdImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const TdTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 30px;
  min-width: 120px;
`;

const TdTitle2 = styled(TdTitle)`
  margin-left: 0;
  margin-right: 30px;
  margin: 0 30px 0 0;
`;

const ScoreBox = styled.div`
  /* vertical-align: bottom; */
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 10px;
`

const TdScore = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  width: auto;
  margin: 0 20px;
`;

const TdSpan = styled.span`
  margin: 0 6px;
`;

const TdScore2 = styled.div`
  font-size: 12px;
  height: 14px;
`

const TdEnd = styled.div`
  background-color: #ee2529;
  width: 46px;
  height: 18px;
  font-size: 10px;
  color: #fff;
  border-radius: 8px;
  margin: 0 auto;
  line-height: 17px;
`;

const Detail = styled.div`
  display: inline-block;
  min-width: 104px;
  padding: 8px 10px;
  background-color: #001c48;
  background-image: url(${Img});
  background-size: cover;
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

const DetailBox = styled.div`
  display: inline-flex;
  vertical-align: middle;
  margin-left: 4px;
`;

export {
  Layout,
  Col,
  Box,
  DateBox,
  Month,
  IconBox,
  ResultBox,
  Table,
  ColGroup,
  TableCol,
  THead,
  Tr,
  Th,
  TBody,
  Td,
  TdMatch,
  TdTeam,
  TdImageBox,
  TdImage,
  TdTitle,
  TdTitle2,
  ScoreBox,
  TdScore,
  TdSpan,
  TdScore2,
  TdEnd,
  Detail,
  DetailBox,
};
